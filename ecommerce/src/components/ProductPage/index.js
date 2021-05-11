import React from 'react';
import Filter from './desktopView/filter';
import MainContainer from './desktopView/MainContainer';

export default function ProductPage(props) {
  const { category, pathname } = props;

  // const [test, settest] = React.useState('');

  // const handelChange = (val) => {
  //   settest(val)
  // }

  return (
    <div className="container d-flex justify-content-between mt-5">
      {/* <Filter test={test} /> */}
      <MainContainer category={category} pathname={pathname} />
    </div>
  );
}
