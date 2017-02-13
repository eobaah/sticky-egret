DROP TABLE posts;

CREATE TABLE IF NOT EXISTS posts(
  id SERIAL PRIMARY KEY,
  title VARCHAR( 3000 ),
  author VARCHAR( 3000 ),
  snippet VARCHAR( 3000 ),
  blog_entry VARCHAR( 3000 ),
  post_date DATE default current_date,
  image_url VARCHAR ( 3000 ),
  tags VARCHAR( 3000 )
);
