import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Card, List, Avatar, Icon} from 'antd';

import { Radar } from 'components/Charts';
import EditableLinkGroup from 'components/EditableLinkGroup';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './Workplace.less';
const tabList = [
  {
    key: 'overview',
    tab: 'OVERVIEW',
  },
  {
    key: 'portfolio',
    tab: 'PORTFOLIO',
  },
  {
    key: 'exits',
    tab: 'EXITS',
  },
  {
    key: 'co-investisor',
    tab: 'CO-INVESTORS',
  },
  {
    key: 'TEAM',
    tab: 'TEAM',
  },
  {
    key: 'CONNECTIONS',
    tab: 'CONNECTIONS',
  },
  {
    key: 'NEWS',
    tab: 'NEWS',
  },

  {
    key: 'METRICS',
    tab: 'METRICS',
  },
  {
    key: 'FILES',
    tab: 'FILES',
  },
  {
    key: 'NOTES',
    tab: 'NOTES',
  },
];
const links = [
  {
    title: '操作一',
    href: '',
  },
  {
    title: '操作二',
    href: '',
  },
  {
    title: '操作三',
    href: '',
  },
  {
    title: '操作四',
    href: '',
  },
  {
    title: '操作五',
    href: '',
  },
  {
    title: '操作六',
    href: '',
  },
];

const members = [
  {
    id: 'members-1',
    title: '科学搬砖组',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    link: '',
  },
  {
    id: 'members-2',
    title: '程序员日常',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
    link: '',
  },
  {
    id: 'members-3',
    title: '设计天团',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
    link: '',
  },
  {
    id: 'members-4',
    title: '中二少女团',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
    link: '',
  },
  {
    id: 'members-5',
    title: '骗你学计算机',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
    link: '',
  },
];

@connect(({ project, activities, chart, loading }) => ({
  project,
  activities,
  chart,
  projectLoading: loading.effects['project/fetchNotice'],
  activitiesLoading: loading.effects['activities/fetchList'],
}))
export default class Workplace extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'project/fetchNotice',
    });
    dispatch({
      type: 'activities/fetchList',
    });
    dispatch({
      type: 'chart/fetch',
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chart/clear',
    });
  }

  renderActivities() {
    const { activities: { list } } = this.props;
    return list.map(item => {
      const events = item.template.split(/@\{([^{}]*)\}/gi).map(key => {
        if (item[key]) {
          return (
            <a href={item[key].link} key={item[key].name}>
              {item[key].name}
            </a>
          );
        }
        return key;
      });
      return (
        <List.Item key={item.id}>
          <List.Item.Meta
            avatar={<Avatar src={item.user.avatar} />}
            title={
              <span>
                <a className={styles.username}>{item.user.name}</a>
                &nbsp;
                <span className={styles.event}>{events}</span>
              </span>
            }
            description={
              <span className={styles.datetime} title={item.updatedAt}>
              </span>
            }
          />
        </List.Item>
      );
    });
  }

  

  render() {
    const {
      project: { notice },
      projectLoading,
      activitiesLoading,
      chart: { radarData },
    } = this.props;

    const pageHeaderContent = (
      <div className={styles.pageHeaderContent}>
        <div className={styles.avatar}>
          <Avatar
            size="large"
            src="https://d29md5j3ph8xfz.cloudfront.net/100_percent/upload/Brand/3192/a512dbf6c7185f6a5114d5aaf4f9fc65.jpeg"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>Partech <div className={styles.contentVerify}><Icon type="check-circle-o" /></div></div>
          <div className={styles.contentDesc}>A global venture capital firm that invest in Internet Information Technology startups at sed venture and grouth stage.</div>
          <div className={styles.contentMap}>  <Icon type="environment-o" /> Paris, France (HQ), San Francissco United State, Berlin Gerlany, Dakar Senegal.</div>
          <div className={styles.contentWebsite}>  <Icon type="link" /> <a href="https://partechpartners.com/">https://partechpartners.com/</a></div>
<div className={styles.icons}>
          <Icon type="linkedin" />
          <Icon type="twitter" />
          </div>
        </div>
      </div>
    );

    const extraContent = (
      <div className={styles.extraContent}>
        <div className={styles.statItem}>
          <p>Employe</p>
          <p>56</p>
        </div>
        <div className={styles.statItem}>
          <p>View</p>
          <p>2,130</p>
        </div>
        <div className={styles.statItem}>
          <p>Launch Date</p>
          <p>1982</p>
        </div>
      </div>
    );

    return (
      <PageHeaderLayout content={pageHeaderContent} extraContent={extraContent}         tabList={tabList}
      >
        <Row gutter={24}>
          <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          <Card
              style={{ marginBottom: 24 }}
              title="PARTECH INFORMATION"
              bordered={false}
              bodyStyle={{ padding: 0 }}
            >
            <div className={styles.infoblock}> 
          <div className={styles.information}>Launch Date : 1982</div>
          <div className={styles.information}>Employeas : 50</div>
          <div className={styles.information}>Views : 2,130</div>
          <div className={styles.information}>Status : Verified</div>
            </div>
            </Card>
            <Card
              bodyStyle={{ padding: 0 }}
              bordered={false}
              className={styles.activeCard}
              title="RECENT ACTIVITY"
              loading={activitiesLoading}
            >
              <List loading={activitiesLoading} size="large">
                <div className={styles.activitiesList}>{this.renderActivities()}</div>
              </List>
            </Card>
          </Col>
          <Col xl={8} lg={24} md={24} sm={24} xs={24}>
            <Card
              style={{ marginBottom: 24 }}
              title="STATUS"
              bordered={false}
              bodyStyle={{ padding: 0 }}
            >
            <div>
              <img className={styles.ImgDeal} src="https://image.noelshack.com/fichiers/2018/24/5/1529095131-dealflow.png"/>
            </div>
            </Card>
           
          </Col>
        </Row>
      </PageHeaderLayout>
    );
  }
}
