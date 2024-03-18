const Box = ({children}) => {
  const style = {
    width: '700px',
    height: '500px',
    backgroundColor: 'rgba(183, 176, 176, 0.756)',
    color: '#000',
    padding: '20px'
  }
  return <div className='box' style={style}>{children}</div>;
};

export default Box;
