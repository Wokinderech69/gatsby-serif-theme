import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const Podology = ({ data }) => {
	const { title, image } = data.markdownRemark.frontmatter;
	const { html } = data.markdownRemark;
	return (
		<Layout bodyClass="page-default-single">
			<div className="container pb-6 pt-6 pt-md-10 pb-md-10">
				<div className="row justify-content-start">
					<div className="col-12 col-md-8">
						<h1 className="title">{title}</h1>
						<img src={image} alt={title} />
						<div
							className="content"
							dangerouslySetInnerHTML={{ __html: html }}
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query ($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
			title
			image
			path
			}
			fields {
			slug
			}
			html
		}
	}
`;

export default Podology;
