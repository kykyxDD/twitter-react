
import React, { Component } from 'react';
import { Button } from 'reactstrap';


class Сompliance extends Component {
  render() {
    return (
      <div className="text-compliance">
        <div className="mb-3">Регистрируясь, вы соглашаетесь с Условиями предоставления услуг и Политикой конфиденциальности, включая Политику использования файлой cookie. Вас можно будет найти по электронной почте и номеру телефона, если вы его укажете. Параметры конфиденциальности</div>
        <Button color='primary' className='w-100 btn-radius font-weight-bold'>Зарегистрироваться</Button>
      </div>
    );
  }
}

export default Сompliance;