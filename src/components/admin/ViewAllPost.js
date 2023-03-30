function ViewAllPost({ items }) {
  return (
    <div>
      {console.log(items)}
      <div style={{
        colort: 'red',
      }}>
        {items
          ? items.map((x, index) => {
              <p key={index}>{x.model}</p>;
            })
          : null}
      </div>
    </div>
  );
}

export default ViewAllPost;
