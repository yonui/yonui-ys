
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Select from 'bee-select';
import FormControl from 'bee-form-control';
const Option = Select.Option;

const propTypes = {
  className: PropTypes.string,
  countryList: PropTypes.array,
  mobile: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  inputProps: PropTypes.object,
  selectProps: PropTypes.object,
  disabled: PropTypes.bool,
  validate:PropTypes.func,//自定义校验方法，return true校验成功，return false 校验失败
}
const defaultProps = {
  className: '',
  countryList: [
    {shoupinyin: 'A', en: 'Angola', country: '安哥拉', locale: 'AO', country_code: 244},
    {shoupinyin: 'A', en: 'Afghanistan', country: '阿富汗', locale: 'AF', country_code: 93},
    {shoupinyin: 'A', en: 'Albania', country: '阿尔巴尼亚', locale: 'AL', country_code: 355},
    {shoupinyin: 'A', en: 'Algeria', country: '阿尔及利亚', locale: 'DZ', country_code: 213},
    {shoupinyin: 'A', en: 'Andorra', country: '安道尔共和国', locale: 'AD', country_code: 376},
    {shoupinyin: 'A', en: 'Anguilla', country: '安圭拉岛', locale: 'AI', country_code: 1264},
    {shoupinyin: 'A', en: 'AntiguaandBarbuda', country: '安提瓜和巴布达', locale: 'AG', country_code: 1268},
    {shoupinyin: 'A', en: 'Argentina', country: '阿根廷', locale: 'AR', country_code: 54},
    {shoupinyin: 'Y', en: 'Armenia', country: '亚美尼亚', locale: 'AM', country_code: 374},
    {shoupinyin: 'A', en: 'Australia', country: '澳大利亚', locale: 'AU', country_code: 61},
    {shoupinyin: 'A', en: 'Austria', country: '奥地利', locale: 'AT', country_code: 43},
    {shoupinyin: 'A', en: 'Azerbaijan', country: '阿塞拜疆', locale: 'AZ', country_code: 994},
    {shoupinyin: 'B', en: 'Bahamas', country: '巴哈马', locale: 'BS', country_code: 1242},
    {shoupinyin: 'B', en: 'Bahrain', country: '巴林', locale: 'BH', country_code: 973},
    {shoupinyin: 'M', en: 'Bangladesh', country: '孟加拉国', locale: 'BD', country_code: 880},
    {shoupinyin: 'B', en: 'Barbados', country: '巴巴多斯', locale: 'BB', country_code: 1246},
    {shoupinyin: 'B', en: 'Belarus', country: '白俄罗斯', locale: 'BY', country_code: 375},
    {shoupinyin: 'B', en: 'Belgium', country: '比利时', locale: 'BE', country_code: 32},
    {shoupinyin: 'B', en: 'Belize', country: '伯利兹', locale: 'BZ', country_code: 501},
    {shoupinyin: 'B', en: 'Benin', country: '贝宁', locale: 'BJ', country_code: 229},
    {shoupinyin: 'B', en: 'BermudaIs.', country: '百慕大群岛', locale: 'BM', country_code: 1441},
    {shoupinyin: 'B', en: 'Bolivia', country: '玻利维亚', locale: 'BO', country_code: 591},
    {shoupinyin: 'B', en: 'Botswana', country: '博茨瓦纳', locale: 'BW', country_code: 267},
    {shoupinyin: 'B', en: 'Brazil', country: '巴西', locale: 'BR', country_code: 55},
    {shoupinyin: 'W', en: 'Brunei', country: '文莱', locale: 'BN', country_code: 673},
    {shoupinyin: 'B', en: 'Bulgaria', country: '保加利亚', locale: 'BG', country_code: 359},
    {shoupinyin: 'B', en: 'Burkina-faso', country: '布基纳法索', locale: 'BF', country_code: 226},
    {shoupinyin: 'M', en: 'Burma', country: '缅甸', locale: 'MM', country_code: 95},
    {shoupinyin: 'B', en: 'Burundi', country: '布隆迪', locale: 'BI', country_code: 257},
    {shoupinyin: 'K', en: 'Cameroon', country: '喀麦隆', locale: 'CM', country_code: 237},
    {shoupinyin: 'J', en: 'Canada', country: '加拿大', locale: 'CA', country_code: 1},
    {shoupinyin: 'Z', en: 'CentralAfricanRepublic', country: '中非共和国', locale: 'CF', country_code: 236},
    {shoupinyin: 'Z', en: 'Chad', country: '乍得', locale: 'TD', country_code: 235},
    {shoupinyin: 'Z', en: 'Chile', country: '智利', locale: 'CL', country_code: 56},
    {shoupinyin: 'Z', en: 'China', country: '中国', locale: 'CN', country_code: 86},
    {shoupinyin: 'G', en: 'Colombia', country: '哥伦比亚', locale: 'CO', country_code: 57},
    {shoupinyin: 'G', en: 'Congo', country: '刚果', locale: 'CG', country_code: 242},
    {shoupinyin: 'K', en: 'CookIs.', country: '库克群岛', locale: 'CK', country_code: 682},
    {shoupinyin: 'G', en: 'CostaRica', country: '哥斯达黎加', locale: 'CR', country_code: 506},
    {shoupinyin: 'G', en: 'Cuba', country: '古巴', locale: 'CU', country_code: 53},
    {shoupinyin: 'Z', en: 'Cyprus', country: '塞浦路斯', locale: 'CY', country_code: 357},
    {shoupinyin: 'J', en: 'CzechRepublic', country: '捷克', locale: 'CZ', country_code: 420},
    {shoupinyin: 'D', en: 'Denmark', country: '丹麦', locale: 'DK', country_code: 45},
    {shoupinyin: 'J', en: 'Djibouti', country: '吉布提', locale: 'DJ', country_code: 253},
    {shoupinyin: 'D', en: 'DominicaRep.', country: '多米尼加共和国', locale: 'DO', country_code: 1890},
    {shoupinyin: 'E', en: 'Ecuador', country: '厄瓜多尔', locale: 'EC', country_code: 593},
    {shoupinyin: 'A', en: 'Egypt', country: '埃及', locale: 'EG', country_code: 20},
    {shoupinyin: 'S', en: 'EISalvador', country: '萨尔瓦多', locale: 'SV', country_code: 503},
    {shoupinyin: 'A', en: 'Estonia', country: '爱沙尼亚', locale: 'EE', country_code: 372},
    {shoupinyin: 'A', en: 'Ethiopia', country: '埃塞俄比亚', locale: 'ET', country_code: 251},
    {shoupinyin: 'F', en: 'Fiji', country: '斐济', locale: 'FJ', country_code: 679},
    {shoupinyin: 'F', en: 'Finland', country: '芬兰', locale: 'FI', country_code: 358},
    {shoupinyin: 'F', en: 'France', country: '法国', locale: 'FR', country_code: 33},
    {shoupinyin: 'F', en: 'FrenchGuiana', country: '法属圭亚那', locale: 'GF', country_code: 594},
    {shoupinyin: 'J', en: 'Gabon', country: '加蓬', locale: 'GA', country_code: 241},
    {shoupinyin: 'G', en: 'Gambia', country: '冈比亚', locale: 'GM', country_code: 220},
    {shoupinyin: 'G', en: 'Georgia', country: '格鲁吉亚', locale: 'GE', country_code: 995},
    {shoupinyin: 'D', en: 'Germany', country: '德国', locale: 'DE', country_code: 49},
    {shoupinyin: 'J', en: 'Ghana', country: '加纳', locale: 'GH', country_code: 233},
    {shoupinyin: 'Z', en: 'Gibraltar', country: '直布罗陀', locale: 'GI', country_code: 350},
    {shoupinyin: 'X', en: 'Greece', country: '希腊', locale: 'GR', country_code: 30},
    {shoupinyin: 'G', en: 'Grenada', country: '格林纳达', locale: 'GD', country_code: 1809},
    {shoupinyin: 'G', en: 'Guam', country: '关岛', locale: 'GU', country_code: 1671},
    {shoupinyin: 'W', en: 'Guatemala', country: '危地马拉', locale: 'GT', country_code: 502},
    {shoupinyin: 'J', en: 'Guinea', country: '几内亚', locale: 'GN', country_code: 224},
    {shoupinyin: 'G', en: 'Guyana', country: '圭亚那', locale: 'GY', country_code: 592},
    {shoupinyin: 'H', en: 'Haiti', country: '海地', locale: 'HT', country_code: 509},
    {shoupinyin: 'H', en: 'Honduras', country: '洪都拉斯', locale: 'HN', country_code: 504},
    {shoupinyin: 'X', en: 'Hongkong', country: '香港', locale: 'HK', country_code: 852},
    {shoupinyin: 'X', en: 'Hungary', country: '匈牙利', locale: 'HU', country_code: 36},
    {shoupinyin: 'B', en: 'Iceland', country: '冰岛', locale: 'IS', country_code: 354},
    {shoupinyin: 'Y', en: 'India', country: '印度', locale: 'IN', country_code: 91},
    {shoupinyin: 'Y', en: 'Indonesia', country: '印度尼西亚', locale: 'ID', country_code: 62},
    {shoupinyin: 'Y', en: 'Iran', country: '伊朗', locale: 'IR', country_code: 98},
    {shoupinyin: 'Y', en: 'Iraq', country: '伊拉克', locale: 'IQ', country_code: 964},
    {shoupinyin: 'A', en: 'Ireland', country: '爱尔兰', locale: 'IE', country_code: 353},
    {shoupinyin: 'Y', en: 'Israel', country: '以色列', locale: 'IL', country_code: 972},
    {shoupinyin: 'Y', en: 'Italy', country: '意大利', locale: 'IT', country_code: 39},
    {shoupinyin: 'Y', en: 'Jamaica', country: '牙买加', locale: 'JM', country_code: 1876},
    {shoupinyin: 'R', en: 'Japan', country: '日本', locale: 'JP', country_code: 81},
    {shoupinyin: 'Y', en: 'Jordan', country: '约旦', locale: 'JO', country_code: 962},
    {shoupinyin: 'J', en: 'Kampuchea(Cambodia)', country: '柬埔寨', locale: 'KH', country_code: 855},
    {shoupinyin: 'H', en: 'Kazakstan', country: '哈萨克斯坦', locale: 'KZ', country_code: 327},
    {shoupinyin: 'K', en: 'Kenya', country: '肯尼亚', locale: 'KE', country_code: 254},
    {shoupinyin: 'H', en: 'Korea', country: '韩国', locale: 'KR', country_code: 82},
    {shoupinyin: 'K', en: 'Kuwait', country: '科威特', locale: 'KW', country_code: 965},
    {shoupinyin: 'J', en: 'Kyrgyzstan', country: '吉尔吉斯坦', locale: 'KG', country_code: 331},
    {shoupinyin: 'L', en: 'Laos', country: '老挝', locale: 'LA', country_code: 856},
    {shoupinyin: 'L', en: 'Latvia', country: '拉脱维亚', locale: 'LV', country_code: 371},
    {shoupinyin: 'L', en: 'Lebanon', country: '黎巴嫩', locale: 'LB', country_code: 961},
    {shoupinyin: 'L', en: 'Lesotho', country: '莱索托', locale: 'LS', country_code: 266},
    {shoupinyin: 'L', en: 'Liberia', country: '利比里亚', locale: 'LR', country_code: 231},
    {shoupinyin: 'L', en: 'Libya', country: '利比亚', locale: 'LY', country_code: 218},
    {shoupinyin: 'L', en: 'Liechtenstein', country: '列支敦士登', locale: 'LI', country_code: 423},
    {shoupinyin: 'L', en: 'Lithuania', country: '立陶宛', locale: 'LT', country_code: 370},
    {shoupinyin: 'L', en: 'Luxembourg', country: '卢森堡', locale: 'LU', country_code: 352},
    {shoupinyin: 'A', en: 'Macao', country: '澳门', locale: 'MO', country_code: 853},
    {shoupinyin: 'M', en: 'Madagascar', country: '马达加斯加', locale: 'MG', country_code: 261},
    {shoupinyin: 'M', en: 'Malawi', country: '马拉维', locale: 'MW', country_code: 265},
    {shoupinyin: 'M', en: 'Malaysia', country: '马来西亚', locale: 'MY', country_code: 60},
    {shoupinyin: 'M', en: 'Maldives', country: '马尔代夫', locale: 'MV', country_code: 960},
    {shoupinyin: 'M', en: 'Mali', country: '马里', locale: 'ML', country_code: 223},
    {shoupinyin: 'M', en: 'Malta', country: '马耳他', locale: 'MT', country_code: 356},
    {shoupinyin: 'M', en: 'Mauritius', country: '毛里求斯', locale: 'MU', country_code: 230},
    {shoupinyin: 'M', en: 'Mexico', country: '墨西哥', locale: 'MX', country_code: 52},
    {shoupinyin: 'M', en: 'Moldova,Republicof', country: '摩尔多瓦', locale: 'MD', country_code: 373},
    {shoupinyin: 'M', en: 'Monaco', country: '摩纳哥', locale: 'MC', country_code: 377},
    {shoupinyin: 'M', en: 'Mongolia', country: '蒙古', locale: 'MN', country_code: 976},
    {shoupinyin: 'M', en: 'MontserratIs', country: '蒙特塞拉特岛', locale: 'MS', country_code: 1664},
    {shoupinyin: 'M', en: 'Morocco', country: '摩洛哥', locale: 'MA', country_code: 212},
    {shoupinyin: 'M', en: 'Mozambique', country: '莫桑比克', locale: 'MZ', country_code: 258},
    {shoupinyin: 'N', en: 'Namibia', country: '纳米比亚', locale: 'NA', country_code: 264},
    {shoupinyin: 'L', en: 'Nauru', country: '瑙鲁', locale: 'NR', country_code: 674},
    {shoupinyin: 'N', en: 'Nepal', country: '尼泊尔', locale: 'NP', country_code: 977},
    {shoupinyin: 'H', en: 'Netherlands', country: '荷兰', locale: 'NL', country_code: 31},
    {shoupinyin: 'X', en: 'NewZealand', country: '新西兰', locale: 'NZ', country_code: 64},
    {shoupinyin: 'N', en: 'Nicaragua', country: '尼加拉瓜', locale: 'NI', country_code: 505},
    {shoupinyin: 'N', en: 'Niger', country: '尼日尔', locale: 'NE', country_code: 227},
    {shoupinyin: 'N', en: 'Nigeria', country: '尼日利亚', locale: 'NG', country_code: 234},
    {shoupinyin: 'C', en: 'NorthKorea', country: '朝鲜', locale: 'KP', country_code: 850},
    {shoupinyin: 'N', en: 'Norway', country: '挪威', locale: 'NO', country_code: 47},
    {shoupinyin: 'A', en: 'Oman', country: '阿曼', locale: 'OM', country_code: 968},
    {shoupinyin: 'B', en: 'Pakistan', country: '巴基斯坦', locale: 'PK', country_code: 92},
    {shoupinyin: 'B', en: 'Panama', country: '巴拿马', locale: 'PA', country_code: 507},
    {shoupinyin: 'B', en: 'PapuaNewCuinea', country: '巴布亚新几内亚', locale: 'PG', country_code: 675},
    {shoupinyin: 'B', en: 'Paraguay', country: '巴拉圭', locale: 'PY', country_code: 595},
    {shoupinyin: 'M', en: 'Peru', country: '秘鲁', locale: 'PE', country_code: 51},
    {shoupinyin: 'F', en: 'Philippines', country: '菲律宾', locale: 'PH', country_code: 63},
    {shoupinyin: 'B', en: 'Poland', country: '波兰', locale: 'PL', country_code: 48},
    {shoupinyin: 'F', en: 'FrenchPolynesia', country: '法属玻利尼西亚', locale: 'PF', country_code: 689},
    {shoupinyin: 'P', en: 'Portugal', country: '葡萄牙', locale: 'PT', country_code: 351},
    {shoupinyin: 'B', en: 'PuertoRico', country: '波多黎各', locale: 'PR', country_code: 1787},
    {shoupinyin: 'K', en: 'Qatar', country: '卡塔尔', locale: 'QA', country_code: 974},
    {shoupinyin: 'L', en: 'Romania', country: '罗马尼亚', locale: 'RO', country_code: 40},
    {shoupinyin: 'E', en: 'Russia', country: '俄罗斯', locale: 'RU', country_code: 7},
    {shoupinyin: 'S', en: 'SaintLueia', country: '圣卢西亚', locale: 'LC', country_code: 1758},
    {shoupinyin: 'S', en: 'SaintVincent', country: '圣文森特岛', locale: 'VC', country_code: 1784},
    {shoupinyin: 'S', en: 'SanMarino', country: '圣马力诺', locale: 'SM', country_code: 378},
    {shoupinyin: 'S', en: 'SaoTomeandPrincipe', country: '圣多美和普林西比', locale: 'ST', country_code: 239},
    {shoupinyin: 'S', en: 'SaudiArabia', country: '沙特阿拉伯', locale: 'SA', country_code: 966},
    {shoupinyin: 'S', en: 'Senegal', country: '塞内加尔', locale: 'SN', country_code: 221},
    {shoupinyin: 'S', en: 'Seychelles', country: '塞舌尔', locale: 'SC', country_code: 248},
    {shoupinyin: 'S', en: 'SierraLeone', country: '塞拉利昂', locale: 'SL', country_code: 232},
    {shoupinyin: 'X', en: 'Singapore', country: '新加坡', locale: 'SG', country_code: 65},
    {shoupinyin: 'S', en: 'Slovakia', country: '斯洛伐克', locale: 'SK', country_code: 421},
    {shoupinyin: 'S', en: 'Slovenia', country: '斯洛文尼亚', locale: 'SI', country_code: 386},
    {shoupinyin: 'S', en: 'SolomonIs', country: '所罗门群岛', locale: 'SB', country_code: 677},
    {shoupinyin: 'S', en: 'Somali', country: '索马里', locale: 'SO', country_code: 252},
    {shoupinyin: 'N', en: 'SouthAfrica', country: '南非', locale: 'ZA', country_code: 27},
    {shoupinyin: 'X', en: 'Spain', country: '西班牙', locale: 'ES', country_code: 34},
    {shoupinyin: 'S', en: 'SriLanka', country: '斯里兰卡', locale: 'LK', country_code: 94},
    {shoupinyin: 'S', en: 'St.Lucia', country: '圣卢西亚', locale: 'LC', country_code: 1758},
    {shoupinyin: 'S', en: 'St.Vincent', country: '圣文森特', locale: 'VC', country_code: 1784},
    {shoupinyin: 'S', en: 'Sudan', country: '苏丹', locale: 'SD', country_code: 249},
    {shoupinyin: 'S', en: 'Suriname', country: '苏里南', locale: 'SR', country_code: 597},
    {shoupinyin: 'S', en: 'Swaziland', country: '斯威士兰', locale: 'SZ', country_code: 268},
    {shoupinyin: 'R', en: 'Sweden', country: '瑞典', locale: 'SE', country_code: 46},
    {shoupinyin: 'R', en: 'Switzerland', country: '瑞士', locale: 'CH', country_code: 41},
    {shoupinyin: 'X', en: 'Syria', country: '叙利亚', locale: 'SY', country_code: 963},
    {shoupinyin: 'T', en: 'Taiwan', country: '台湾省', locale: 'TW', country_code: 886},
    {shoupinyin: 'T', en: 'Tajikstan', country: '塔吉克斯坦', locale: 'TJ', country_code: 992},
    {shoupinyin: 'T', en: 'Tanzania', country: '坦桑尼亚', locale: 'TZ', country_code: 255},
    {shoupinyin: 'T', en: 'Thailand', country: '泰国', locale: 'TH', country_code: 66},
    {shoupinyin: 'D', en: 'Togo', country: '多哥', locale: 'TG', country_code: 228},
    {shoupinyin: 'T', en: 'Tonga', country: '汤加', locale: 'TO', country_code: 676},
    {shoupinyin: 'T', en: 'TrinidadandTobago', country: '特立尼达和多巴哥', locale: 'TT', country_code: 1809},
    {shoupinyin: 'T', en: 'Tunisia', country: '突尼斯', locale: 'TN', country_code: 216},
    {shoupinyin: 'T', en: 'Turkey', country: '土耳其', locale: 'TR', country_code: 90},
    {shoupinyin: 'T', en: 'Turkmenistan', country: '土库曼斯坦', locale: 'TM', country_code: 993},
    {shoupinyin: 'W', en: 'Uganda', country: '乌干达', locale: 'UG', country_code: 256},
    {shoupinyin: 'W', en: 'Ukraine', country: '乌克兰', locale: 'UA', country_code: 380},
    {shoupinyin: 'A', en: 'UnitedArabEmirates', country: '阿拉伯联合酋长国', locale: 'AE', country_code: 971},
    {shoupinyin: 'Y', en: 'UnitedKiongdom', country: '英国', locale: 'GB', country_code: 44},
    {shoupinyin: 'M', en: 'UnitedStatesofAmerica', country: '美国', locale: 'US', country_code: 1},
    {shoupinyin: 'W', en: 'Uruguay', country: '乌拉圭', locale: 'UY', country_code: 598},
    {shoupinyin: 'W', en: 'Uzbekistan', country: '乌兹别克斯坦', locale: 'UZ', country_code: 233},
    {shoupinyin: 'W', en: 'Venezuela', country: '委内瑞拉', locale: 'VE', country_code: 58},
    {shoupinyin: 'Y', en: 'Vietnam', country: '越南', locale: 'VN', country_code: 84},
    {shoupinyin: 'Y', en: 'Yemen', country: '也门', locale: 'YE', country_code: 967},
    {shoupinyin: 'N', en: 'Yugoslavia', country: '南斯拉夫', locale: 'YU', country_code: 381},
    {shoupinyin: 'J', en: 'Zimbabwe', country: '津巴布韦', locale: 'ZW', country_code: 263},
    {shoupinyin: 'Z', en: 'Zambia', country: '赞比亚', locale: 'ZM', country_code: 260},
  ],
  placeholder: '请输入您的手机号',
}

const zhcnInfo = {shoupinyin: 'Z', en: 'China', country: '中国', locale: 'CN', country_code: 86};

class MobileLocale extends Component {
  constructor (props) {
    super(props);
    const { country_code, mobile } = props
    const countryObj = country_code ? this.getFindObj(country_code) : null;
    this.state = {
      country_code: countryObj ? countryObj.country_code : zhcnInfo.country_code,
      country: countryObj ? countryObj.country : zhcnInfo.country,
      mobile: mobile || '',
    }
  }

  componentWillReceiveProps (nextProps) {
    const { country_code, mobile } = nextProps
    if (country_code != this.state.country_code || mobile != this.state.mobile) {
      const _country_code = country_code != this.state.country_code ? country_code : this.state.country_code;
      const _mobile = mobile != this.state.mobile ? mobile : this.state.mobile;
      this.setState({
        country_code: _country_code,
        mobile: _mobile
      })
    }
  }

  componentDidMount () {
    this.setState({
      elWidth: ReactDOM.findDOMNode(this.refs.the_input).getBoundingClientRect().width
    })
  }

  validateValue=(value) => {
    let { validate } = this.props;
    if(validate&&typeof validate == 'function'){
      return validate(value)
    }else{
      if (!value || value === '') return true;
      const reg = /^[0-9]\d{0,}$/;
      return reg.test(value);
    }
  }

  onChange = (obj) => {
    this.setState({...obj})
    this.props.onChange && this.props.onChange({...obj});
  }

  getFindObj = (code) => {
    const {countryList} = this.props;
    if (!countryList) return zhcnInfo;
    return countryList.forEach(da => da.country_code === code);
  }

  render () {
    const { country_code, mobile} = this.state
    const {countryList, selectProps, className, inputProps, placeholder, disabled} = this.props;
    const _defaultValue = zhcnInfo.country_code;
    let styleProp = {}
    if (this.state.elWidth) {
      styleProp = { width: parseInt(this.state.elWidth)};
    }

    return (
      <div className={`mobile-locale ${className}`} ref='the_input'>
        <div className='location'>
          <Select
            showSearch={true}
            {...selectProps}
            dropdownClassName='mobile_locale_select'
            dropdownStyle={styleProp}
            dropdownMatchSelectWidth={false}
            value={country_code || _defaultValue}
            disabled={disabled}
            onChange={(key, e) => {
              const current = countryList.find(value => String(value.country_code) === key, e);
              this.onChange({country_code: current.country_code, country: current.country, mobile});
            }}>
            {countryList.map((account) => <Option key={account.country_code} value={String(account.country_code)}>
              <span>{account.country}</span>
              <span className='opt1'>+{account.country_code}</span>
            </Option>)}
          </Select>
        </div>

        <div className='area'>
          + {country_code || _defaultValue}
        </div>

        <div className='mobile'>
          <span />
          <FormControl
            showClose={true}
            onBlur={() => {
              this.props.onBlur && this.props.onBlur({...this.state})
            }}
            onChange={(v) => {
              if (!this.validateValue(v)) return false // 校验合法性
              this.onChange({...this.state, mobile: v, })
            }}
            disabled={disabled}
            {...inputProps}
            value={mobile}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }
}

MobileLocale.propTypes = propTypes;
MobileLocale.defaultProps = defaultProps;
export default MobileLocale;
