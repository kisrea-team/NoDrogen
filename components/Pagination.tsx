// 'use client';
 
// // import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
// // import clsx from 'clsx';
// // import Link from 'next/link';
// import { usePathname, useSearchParams } from 'next/navigation';
 
// export default function Pagination({ totalPages }: { totalPages: number }) {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const currentPage = Number(searchParams.get('page')) || 1;
  
//   return (
//     <div>
//         <div className="block">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
//             </svg>
//         </div>
//         <div className="block">
//             <p>{totalPages}</p>
//         </div>
//         <div className="block">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
//         </svg>
//         </div>
//     </div>
// )
//   const createPageURL = (pageNumber: number | string) => {
//     const params = new URLSearchParams(searchParams);
//     params.set('page', pageNumber.toString());
//     return `${pathname}?${params.toString()}`;
//   };
  // ...
// }
import styles from "../components/Home.module.css";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {

const pagesCount = Math.ceil(items / pageSize); // 100/10


if (pagesCount === 1) return null;

const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

console.log(pages)


return (

    <div>
    <p>分页前瞻：</p>
    <ul className={styles.pagination}>
    
    {pages.map((page) => (
    
    <li
    
    key={page}
    
    className={
    
    page === currentPage ? styles.pageItemActive : styles.pageItem
    
    }
    
    >
    
    <a className={styles.pageLink} >
    
    {page}
    
    </a>
    
    </li>
    
    ))}
    
    </ul>
    
    </div>
    
    );
    

    

};


export default Pagination;
