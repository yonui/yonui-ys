
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Select from 'bee-select';
import FormControl from 'bee-form-control';
import countryList from './CountryLocale';

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
  validate: PropTypes.func,//自定义校验方法，return true校验成功，return false 校验失败
}
const defaultProps = {
  className: '',
  countryList: countryList,
  placeholder: '请输入您的手机号',
}

const zhcnInfo = { shoupinyin: 'Z', en: 'China', country: '中国', locale: 'CN', country_code: 86 };

class MobileLocale extends Component {
  constructor(props) {
    super(props);
    const { country_code, mobile } = props
    const countryObj = country_code ? this.getFindObj(country_code) : null;
    this.state = {
      country_code: countryObj ? countryObj.country_code : zhcnInfo.country_code,
      country: countryObj ? countryObj.country : zhcnInfo.country,
      mobile: mobile || '',
    }
  }

  componentWillReceiveProps(nextProps) {
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

  componentDidMount() {
    this.setState({
      elWidth: ReactDOM.findDOMNode(this.refs.the_input).getBoundingClientRect().width
    })
  }

  validateValue = (value) => {
    let { validate } = this.props;
    if (validate && typeof validate == 'function') {
      return validate(value)
    } else {
      if (!value || value === '') return true;
      const reg = /^[0-9]\d{0,}$/;
      return reg.test(value);
    }
  }

  onChange = (obj) => {
    this.setState({ ...obj })
    this.props.onChange && this.props.onChange({ ...obj });
  }

  getFindObj = (code) => {
    const { countryList } = this.props;
    if (!countryList) return zhcnInfo;
    return countryList.forEach(da => da.country_code === code);
  }

  render() {
    const { country_code, mobile } = this.state
    const { countryList, selectProps, className, inputProps, placeholder, disabled } = this.props;
    const _defaultValue = zhcnInfo.country_code;
    let styleProp = {}
    if (this.state.elWidth) {
      styleProp = { width: parseInt(this.state.elWidth) };
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
              this.onChange({ country_code: current.country_code, country: current.country, mobile });
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
              this.props.onBlur && this.props.onBlur({ ...this.state })
            }}
            onChange={(v) => {
              if (!this.validateValue(v)) return false // 校验合法性
              this.onChange({ ...this.state, mobile: v, })
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
