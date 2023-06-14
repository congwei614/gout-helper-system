import { FC } from "react";
import LayoutHeader from './Header'
import LayoutSider from './Sider'
import LayoutContent from './Content'
import LayoutFooter from './Footer'
import {Divider, Layout, theme} from 'antd';
/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-06-10 21:43:42
 * @LastEditTime: 2023-06-13 21:54:58
 */
const Layouts: FC = () => {
    const {
        token: { colorBgContainer },
        } = theme.useToken();
    return (
        <Layout style={{minHeight:'100vh'}}>
            <LayoutHeader style={{ display: 'flex', alignItems: 'center', height: 70,background: colorBgContainer, }}/>
            <Divider style={{margin:0}} />
            <Layout>
                <LayoutSider width={200}  style={{ background: colorBgContainer,}} />
                <Divider style={{margin:0}} type='vertical' />
                <Layout style={{ padding: '0 24px 24px',background: colorBgContainer }}>
                <LayoutContent  style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        background: colorBgContainer,
                }}/>
                </Layout>
            </Layout>
            <Divider style={{margin:0}} />
            <LayoutFooter style={{ height: 50, background: colorBgContainer,}}/>
        </Layout>
    )
}

export default Layouts