/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-06-10 21:39:50
 * @LastEditTime: 2023-06-13 20:35:49
 */
import { Layout } from 'antd';
import type { BasicProps } from 'antd/es/layout/layout';
import  { FC } from 'react';
const {Header } = Layout;
const LayoutHeader:FC<BasicProps> = (props)=> {
    return (
      <Header {...props}>Header</Header>
    )
}
export default LayoutHeader