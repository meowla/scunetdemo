import './App.css';
import { Button, Drawer, Collapse } from 'antd';
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items=[
  {
    label:"学校简介",
    key:"introduction",
  },{
    label:"招生简章",
    key:"recruit",
  },{
    label:"学校新闻",
    key:"news",
  },{
    label:"杰出校友",
    key:"celebrity"
  }
];
let globeShowDrawer=()=>{};
const App=()=>{
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    if(e.key=="introduction"){
        globeShowDrawer();
    }
  };

  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <Page1 />
    </>
  ) 
}
const Page1 = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  globeShowDrawer=showDrawer;
  const onClose = () => {
    setVisible(false);
  };
  const { Panel } = Collapse;
  return (
    <>
      <Drawer title="四川大学简介" placement="left" onClose={onClose} visible={visible}>
        <Collapse defaultActiveKey={['1']} >
          <Panel header="学校实力" key="1">
            <p>学校现有13个国家重点实验室、国家工程实验室、国家工程技术研究中心及国家地方联合工程实验室等国家级研究基地，4个国家级国际科技合作基地，11个教育部重点实验室和6个教育部工程研究中心，3个国家卫生和计划生育委员会重点实验室；有9个国家人才培养和科学研究及工科基础课程教学基地，8个国家级实验教学示范中心，19个国家级工程实践教育中心，3个国家级虚拟仿真实验教学中心，1个国家级教师教学发展示范中心，1个国家大学生文化素质教育基地，9个国家级大学生校外实践教育基地，1个全国高校心理健康教育与心理咨询示范中心，4个教育部人文社会科学重点研究基地，3个国家药物临床试验机构（数据截至2017年12月31日）</p>
          </Panel>
          <Panel header="百科" key="2">
            <p>四川大学（英语：Sichuan University，缩写：SCU），简称川大，位于中国四川省成都市，是中国历史最为悠久的大学之一。四川大学起始于1896年四川总督鹿传霖奉光绪特旨创办的四川中西学堂，是西南地区乃至中国最早的近代高等学校，四川大学承文翁之教，聚群贤英才。历史上，吴玉章、张澜曾执掌校务，共和国开国元勋朱德、共和国主席杨尚昆、文坛巨匠郭沫若、人民作家巴金、一代英烈江竹筠（江姐）等曾在川大求学。四川大学是中华人民共和国顶尖高校之一，是“双一流A类”和原“985工程”、原“211工程”重点建设大学，同时入选“高等学校创新能力提升计划（简称：“2011计划”）”、“珠峰计划”、“111计划”、“卓越工程师教育培养计划”、“海外高层次人才引进计划”，同时也是中俄“长江—伏尔加河”高校联盟牵头成员及金砖国家大学联盟、海峡两岸暨港澳防灾减灾即永续发展大学联盟成员。</p>
          </Panel>
          <Panel header="校歌" key="3">
            <p>岷山峨峨开天府，<br/>
江水泱泱流今古。<br/>
聚精会神生大禹，<br/>
近揆文教远奋武。<br/>
桓桓熊罴起西土，<br/>
锵锵鸣凤叶东鲁。<br/>
和神人，歌且舞，<br/>
领袖群英吾与汝。</p>
          </Panel>
        </Collapse>
      </Drawer>
    </>
  );
};

export default App;