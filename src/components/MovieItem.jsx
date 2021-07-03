import React from 'react';
import { Card, Col } from 'antd';
import { format } from 'date-fns';
import cutText from '../functions/cutText';

const MovieItem = ({
  poster_path, title, release_date, overview,
}) => {
  const { Meta } = Card;

  const date = release_date ? format(new Date(release_date), 'd MMMM, yyyy') : null;
  return (
        <Col span={10}>
            <Card>
                <Meta
                    avatar={(
                        <img
                            alt=""
                            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
                        />
                      )}
                    title={title}
                    description={cutText(overview)}
                />
                {date}
            </Card>
        </Col>
  );
};

export default MovieItem;
