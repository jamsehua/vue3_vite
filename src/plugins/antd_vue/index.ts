import {
  Button,
  Form,
  Input,
  Row,
  Col,
  Spin,
  Layout,
  Menu,
  Breadcrumb,
  Table,
  Divider,
} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

export function setupAntd(app) {
  // need
  // Here are the components required before registering and logging in
  app
  .use(Form)
  .use(Input)
  .use(Row)
  .use(Col)
  .use(Spin)
  .use(Button)
  .use(Layout)
  .use(Menu)
  .use(Breadcrumb)
  .use(Table)
  .use(Divider)
}
