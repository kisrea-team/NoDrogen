/*
 * @Author: vhko
 * @Date: 2024-01-30 23:04:00
 * @LastEditors: vhko
 * @LastEditTime: 2024-02-25 22:50:32
 * @FilePath: \NoDrogen\components\Loading.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import * as React from "react";

import { LoadingIcon } from "./LoadingIcon";
import styles from "./Loading.module.css";
export const Loading: React.FC = () => (
  <div className={styles.container}>
    <LoadingIcon />
  </div>
);
