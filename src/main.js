import Vue from 'vue';
import App from './App';
import router from './router';
import http from '@/service/http';
import reload from '@/service/reload';
import highlight from '@/service/highlight';
import md5 from '@/service/md5';
import valid from '@/service/valid';
import dictionary from '@/service/dictionary';
import authority from '@/directive/authority';
import store from './store';
import DComponent from '@/views/test/DComponent';
import PComponent from '@/views/test/PComponent';
import DButton from '@/views/test/DButton';
import DInput from '@/views/test/DInput';
import DTextarea from '@/views/test/DTextarea';
import DSelect from '@/views/test/DSelect';
import DCard from '@/views/test/DCard';
import DRow from '@/views/test/DRow';
import DCol from '@/views/test/DCol';
import DCheckbox from '@/views/test/DCheckbox';
import DCheckboxGroup from '@/views/test/DCheckboxGroup';
import DRadioGroup from '@/views/test/DRadioGroup';
import DRadio from '@/views/test/DRadio';
import DInputNumber from '@/views/test/DInputNumber';
import DCascader from '@/views/test/DCascader';
import DSwitch from '@/views/test/DSwitch';
import DColorPicker from '@/views/test/DColorPicker';
import DDatePicker from '@/views/test/DDatePicker';
import RandomChart from '@/views/test/RandomChart';
/**
 * vue扩展列表
 */
const venders = [
  http, reload, highlight, md5, valid, dictionary, authority
];

/**
 * 注册vue扩展
 */
venders.forEach((item) => {
  Vue.use(item);
});

Vue.config.productionTip = false;

/**
 * 组件库
 */
import { ColorPicker, Alert, Cascader, InputNumber, Aside, Badge, Button, Breadcrumb, BreadcrumbItem, Col, Container, Card, Dialog, DatePicker, Footer, Form, FormItem, Header, Icon, Input, Loading, Main, Menu, MenuItem, MenuItemGroup, Message, MessageBox, Notification, Option, Pagination, Popover, Radio, RadioGroup, RadioButton, Row, Select, Submenu, Switch, Tabs, TabPane, Table, TableColumn, Tag, TimePicker, Checkbox, CheckboxGroup
} from 'element-ui';

/**
 * 组件库列表
 */
const components = [
  DColorPicker, DCascader, DInputNumber, DRadio, DRadioGroup, DCheckboxGroup, DCheckbox, DCol, DRow, DCard, DSelect, DTextarea, DInput, DButton, PComponent, DComponent, DSwitch,
  RandomChart, DDatePicker, ColorPicker, Alert, Cascader, InputNumber, Aside, Badge, Button, Breadcrumb, BreadcrumbItem, Col, Container, Card, Dialog, DatePicker, Footer, Form, FormItem, Header, Icon, Input,  Main, Menu, MenuItem, MenuItemGroup, Option, Pagination, Popover, Radio, RadioGroup, RadioButton, Row, Select, Submenu, Switch, Tabs, TabPane, Table, TableColumn, Tag, TimePicker, Checkbox, CheckboxGroup
];

/**
 * 注册组件库
 */
components.forEach((item) => {
  Vue.component(item.name, item)
})

/**
 * 以下组件需要以服务的形式注册
 */
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
