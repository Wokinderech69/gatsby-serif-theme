import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Cta = props => {
	const data = useStaticQuery(graphql`
    query ContactQuery {
        contactJson {
          phone
          email
          contact_button_link
        }
    }
  `);
	return (
		<div className="custom-ctacont">
			<p><strong>Phone: </strong>(068) 558-99-80</p>
			<address>м. Вінниця вул. Оводова 15/3</address>
		</div>
	);
};

export default Cta;