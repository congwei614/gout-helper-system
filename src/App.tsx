/*
 * @Author: Mr.Cong Wei
 * @Date: 2023-06-10 11:59:45
 * @LastEditTime: 2023-06-14 21:26:49
 */
import { ConfigProvider } from 'antd';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import router from '/@/router';

const App: React.FC = () => {
  const outlet = useRoutes(router);
  // 定义主题类型
  // enum ThemeType {
  //   DEFAULT = 'defaultAlgorithm',
  //   DARK = 'darkAlgorithm',
  //   COMPACT = 'compactAlgorithm'
  // }

  // const themeData = [
  //   { label: '默认主题', value: ThemeType.DEFAULT },
  //   { label: '黑色主题', value: ThemeType.DARK },
  //   { label: '紧凑主题', value: ThemeType.COMPACT }
  // ];

  // 当前主题
  // const [themeValue, setTheme] = useState<ThemeType>(ThemeType.DEFAULT);
  // 切换主题
  // const handleChange = (value: React.SetStateAction<ThemeType>) => {
  //   setTheme(value);
  // };

  return (
    <ConfigProvider
      theme={
        {
          // algorithm: theme[themeValue]
        }
      }>
      {/* <Select
          defaultValue={ThemeType.DEFAULT}
          style={{ width: 120 }}
          onChange={handleChange}
          options={themeData}
          />

      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link> */}
      {outlet}
    </ConfigProvider>
  );
};

export default App;
