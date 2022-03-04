const Scroll = (props) => {
  return (
    <div style={ { overflow: 'scroll', height: '850px', marginTop: '25px' } }>
      { props.children }
    </div>
  );
};

export default Scroll;
