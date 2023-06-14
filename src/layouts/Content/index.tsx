/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-06-10 21:39:50
 * @LastEditTime: 2023-06-13 21:22:19
 */
import { Layout } from 'antd';
import type { BasicProps } from 'antd/es/layout/layout';
import  { FC } from 'react';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;
const LayoutContent:FC<BasicProps> = (props)=> {
    return (
      <Content {...props}>
        Content
        <Outlet />
      </Content>
    )
}
export default LayoutContent