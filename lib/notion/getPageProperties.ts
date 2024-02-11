/*
 * @Author: zitons
 * @Date: 2024-02-10 10:30:55
 * @LastEditors: 
 * @LastEditTime: 2024-02-11 17:19:58
 * @Description: 简介
 */
import { getTextContent, getDateValue } from "notion-utils";
import { NotionAPI } from "notion-client";
// import { Decoration } from "notion-types";

const { NOTION_ACCESS_TOKEN } = process.env;

const client = new NotionAPI({ authToken: NOTION_ACCESS_TOKEN });
/*
获取页面属性
block、schema是整体的
*/
async function getPageProperties(id, block, schema) {
  const rawProperties = Object.entries(block?.[id]?.value?.properties || []);
  const excludeProperties = ["date", "select", "multi_select", "person"];
  const properties = {};
  for (let i = 0; i < rawProperties.length; i++) {
    const [key, val]: any = rawProperties[i];
    properties["id"] = id;
    if (schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
      properties[schema[key].name] = getTextContent(val);
    } else {
      switch (schema[key]?.type) {
        case "date": {
          const dateProperty = getDateValue(val);
          delete dateProperty.type;
          properties[schema[key].name] = dateProperty;
          break;
        }
        case "select":
        case "multi_select": {
          const selects = getTextContent(val);
          if (selects[0]?.length) {
            properties[schema[key].name] = selects.split(",");
          }
          break;
        }
        case "person": {
          const rawUsers = val.flat();
          const users = [];
          for (let i = 0; i < rawUsers.length; i++) {
            if (rawUsers[i][0][1]) {
              const userId = rawUsers[i][0];
              const res = await client.getUsers(userId);
              const resValue =
                res?.["recordMapWithRoles"]?.notion_user?.[userId[1]]?.value;
              const user = {
                id: resValue?.id,
                name: resValue?.name,
                first_name: resValue?.given_name,
                last_name: resValue?.family_name,
                profile_photo: resValue?.profile_photo,
              };
              users.push(user);
            }
          }
          properties[schema[key].name] = users;
          break;
        }
        default:
          break;
      }
    }
  }
  return properties;
}

export { getPageProperties as default };
