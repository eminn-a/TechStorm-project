const AddNews = () => {
  return (
    <section className="item content">
      <div className="container toparea">
        <div className="underlined-title">
          <div className="editContent">
            <h1 className="text-center latestitems">Add News</h1>
          </div>
          <div className="wow-hr type_short">
            <span className="wow-hr-h">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <div className="done">
              <div className="alert alert-danger">
                <button type="button" className="close" data-dismiss="alert">
                  ×
                </button>
                All fields are required!
              </div>
            </div>
            <form id="contactform">
              <div className="form">
                <input type="text" name="title" placeholder="Title Here *" />
                <input
                  type="text"
                  name="title"
                  placeholder="Small Description *"
                />

                <textarea
                  name="comment"
                  rows="7"
                  placeholder="Description *"
                ></textarea>
                <input
                  type="submit"
                  id="submit"
                  className="clearfix btn"
                  value="Add News"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNews;
