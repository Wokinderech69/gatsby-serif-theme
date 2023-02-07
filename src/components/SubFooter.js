import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Social from './Social';
import Cta from '../templates/cta';


const SubFooter = props => {
	const data = useStaticQuery(graphql`
    query SubFooterQuery {
      configJson {
        footer {
          copyright_text
          copyright_link
        }
      }
    }
  `);
	return (
		<div className="sub-footer">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sub-footer-inner">
							<Social />
							<div className="copyright">
								<span>{data.configJson.footer.copyright_text}</span>
								<span>{data.configJson.footer.copyright_text2}</span>
								{data.configJson.footer.copyright_link && (
									<a href={data.configJson.footer.copyright_link}>Наш партнер: GetSkill.com.ua пошук курсів у Вінниці та Україні</a>
								)}
							</div>
							<Cta />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubFooter;
{/* зробити стиль  display flex */ }
