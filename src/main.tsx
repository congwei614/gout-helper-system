/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-06-10 11:59:45
 * @LastEditTime: 2023-06-12 21:33:44
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './App';
import { App, ConfigProvider } from 'antd';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';

import './index.less';
import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';

dayjs.locale('zh-cn');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App>
      <ConfigProvider locale={zhCN}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </ConfigProvider>
    </App>
  </React.StrictMode>
);
