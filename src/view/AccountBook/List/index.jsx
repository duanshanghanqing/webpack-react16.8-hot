import React from 'react';
import { Table } from 'antd';
import { selectUserContactAccountBookList } from './action';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBookList: [],
    };
    this.columns = [
      {
        title: '账本名称',
        dataIndex: 'accountBookName',
        key: 'accountBookName',
        render: (text) => <a>{text}</a>,
      },
      {
        title: '读写类型',
        dataIndex: 'readWriteTypeStr',
        key: 'readWriteTypeStr',
      },
      {
        title: '是否添加操作',
        dataIndex: 'ifAddOperatorStr',
        key: 'ifAddOperatorStr',
      },
      {
        title: '操作',
        width: 150,
        dataIndex: 'accountBookId',
        key: 'accountBookId',
        render: (text, row) => {
          if (row.ifAddOperator === 0) {
            return <a>添加操作人</a>;
          }
          return <a>--</a>;
        },
      },
    ];
  }

  async componentDidMount() {
    if (sessionStorage.getItem('user')) {
      const { userId } = JSON.parse(sessionStorage.getItem('user'));
      const accountBookList = await selectUserContactAccountBookList({ userId });
      if (Array.isArray(accountBookList)) {
        accountBookList.forEach((item, index) => {
          item.key = index;
        });
        this.setState({ accountBookList });
      }
    }
  }

  render() {
    const { accountBookList } = this.state;
    return (
      <Table columns={this.columns} dataSource={accountBookList} />
    );
  }
}
