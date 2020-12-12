import React, { useState, useEffect } from "react";
import { Button, Card, Container, CardDeck } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import blogActions from "../redux/actions/blog.actions";
import { ClipLoader } from "react-spinners";
import PaginationBar from "../components/PaginationBar";
import moment from "moment";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const totalPageNum = useSelector((state) => state.blog.totalPageNum);
  const loading = useSelector((state) => state.blog.loading);

  const [pageNum, setPageNum] = useState(1);
  const history = useHistory();

  const hanleToAddBlog = () => {
    history.push("/blog/add");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(blogActions.blogsRequest(pageNum));
  }, [dispatch, pageNum]);

  return (
    <Container>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button onClick={hanleToAddBlog} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
      <PaginationBar
        pageNum={pageNum}
        setPageNum={setPageNum}
        totalPageNum={totalPageNum}
      ></PaginationBar>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="red" size={150} loading={true} />
        </div>
      ) : (
        <>
          {blogs.length > 0 ? (
            <CardDeck>
              {blogs.map((blog) => (
                <Card
                  className=" mt-5 d-flex flex-wrapped"
                  style={{ width: "300px", flex: "0 0 auto" }}
                >
                  {blog.images?.length > 0 && (
                    <Card.Img variant="top" src={blog.images[0]} />
                  )}
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.content}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>{" "}
                  <Card.Footer
                    className="text-muted"
                    style={{ fontSize: "10px" }}
                  >
                    @wrote by {blog.author.name} in {blog.updatedAt}
                    {/* {moment().startOf("hour").fromNow()} */}
                  </Card.Footer>
                </Card>
              ))}
            </CardDeck>
          ) : (
            <p>There are no blogs</p>
          )}
        </>
      )}
    </Container>
  );
};

export default HomePage;
