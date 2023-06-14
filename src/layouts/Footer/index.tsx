/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-06-10 21:39:50
 * @LastEditTime: 2023-06-13 20:51:07
 */
import { Layout } from 'antd';
import type { BasicProps } from 'antd/es/layout/layout';
import { FC } from 'react';
const { Footer } = Layout;
const LayoutFooter: FC<BasicProps> = (props) => {
  return <Footer {...props}>Footer</Footer>;
};
export default LayoutFooter;
