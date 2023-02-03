import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const Prices = ({ data }) => {
	const { title } = data.markdownRemark.frontmatter;
	const { html } = data.markdownRemark;
	return (
		<Layout bodyClass="page-default-single">
			<div className="container pb-6 pt-6 pt-md-10 pb-md-10">
				<div className="row justify-content-start">
					<div className="col-12 col-md-8">
						<h1 className="title">{title}</h1>
						<div
							className="content"
							dangerouslySetInnerHTML={{ __html: html }}
						/>
					</div>
				</div>
			</div>
			<table>
				<tr>
					<th>Нігтьовий сервіс:</th>
				</tr>
				<tr>
					<th>Манікюр:</th>
				</tr>
				<tr>
					<td>Манікюр покриття гель лаком(зняття в подарунок)</td>
					<td>400 грн</td>
				</tr>
				<tr>
					<td>Манікюр обрізний, апаратний, комбінований</td>
					<td>250 грн</td>
				</tr>
				<tr>
					<td>Зняття-гель лаку</td>
					<td>100 грн</td>
				</tr>
				<tr>
					<td>Покриття гель лаком</td>
					<td>210 грн</td>
				</tr>
				<tr>
					<td>Ремонт одного нігтя</td>
					<td>60 грн</td>
				</tr>
				<tr>
					<td>Укріплення нігтів гелем</td>
					<td>140 грн</td>
				</tr>
				<tr>
					<td>Френч</td>
					<td>110 грн</td>
				</tr>
				<tr>
					<td>Нарощення нігтів гелем</td>
					<td>600 грн</td>
				</tr>
				<tr>
					<td>Корекція нарощених нігтів</td>
					<td>500 грн</td>
				</tr>
				<tr>
					<td>Зняття нарощених нігтів</td>
					<td>250 грн</td>
				</tr>
				<tr>
					<th>Педикюр:</th>
				</tr>
				<tr>
					<td>Педикюр (п'яточки та пальчики) + покриття(зняття в подарунок)</td>
					<td>500 грн</td>
				</tr>
				<tr>
					<td>Педикюр апаратний, обрізний, комбінований</td>
					<td>340 грн</td>
				</tr>
				<tr>
					<td>Зняття-гель лаку</td>
					<td>100 грн</td>
				</tr>
				<tr>
					<td>Педикюр пальчики</td>
					<td>250 грн</td>
				</tr>
				<tr>
					<td>Покриття гель лаку</td>
					<td>210 грн</td>
				</tr>
				<tr>
					<td>Манікюр та педикюр з покриттям гель лаку в чотири руки</td>
					<td>1000 грн</td>
				</tr>
				<tr>
					<th>Брови та вії:</th>
				</tr>
				<tr>
					<td>Корекція фрми воском та покраска брів</td>
					<td>250 грн</td>
				</tr>
				<tr>
					<td>Корекція фрми воском брів</td>
					<td>100 грн</td>
				</tr>
				<tr>
					<td>Покраска вій</td>
					<td>110 грн</td>
				</tr>
				<tr>
					<td>Ламінування вій</td>
					<td>550 грн</td>
				</tr>
				<tr>
					<td>Ламінування брів</td>
					<td>550 грн</td>
				</tr>
				<tr>
					<td>Біозавивка брів</td>
					<td>550 грн</td>
				</tr>
				<tr>
					<th>Подологія:</th>
				</tr>
				<tr>
					<td>Педикюр медичний</td>
					<td>390 грн</td>
				</tr>
				<tr>
					<td>Корекція титанової нитки</td>
					<td>- грн</td>
				</tr>
				<tr>
					<td>Протезування нігтів</td>
					<td>600 грн</td>
				</tr>
				<tr>
					<td>Силіконовий ортез (виготовлення)</td>
					<td>490-760 грн</td>
				</tr>
				<tr>
					<td>Тампонада</td>
					<td>40 грн</td>
				</tr>
				<tr>
					<td>Видалення бородавки</td>
					<td>160 грн</td>
				</tr>
				<tr>
					<td>Видалення врісшого нігтя</td>
					<td>280 грн</td>
				</tr>
				<tr>
					<td>Видалення мозоля</td>
					<td>200 грн</td>
				</tr>
				<tr>
					<td>Встановлення скоби Фрезера</td>
					<td>2080 грн</td>
				</tr>
				<tr>
					<td>Встановлення титанової нитки</td>
					<td>1660 грн</td>
				</tr>
				<tr>
					<td>Консультація</td>
					<td>80 грн</td>
				</tr>
				<tr>
					<th>Воскова депіляція:</th>
				</tr>
				<tr>
					<td>Живіт повністю</td>
					<td>200 грн</td>
				</tr>
				<tr>
					<td>Лінія живота</td>
					<td>110 грн</td>
				</tr>
				<tr>
					<td>Зони сідниць</td>
					<td>140 грн</td>
				</tr>
				<tr>
					<td>Руки повністю</td>
					<td>250 грн</td>
				</tr>
				<tr>
					<td>Руки до ліктя</td>
					<td>200 грн</td>
				</tr>
				<tr>
					<td>Руки нижче ліктя</td>
					<td>125 грн</td>
				</tr>
				<tr>
					<td>Верхня губа</td>
					<td>90 грн</td>
				</tr>
				<tr>
					<td>Верхня губа + підборіддя</td>
					<td>120 грн</td>
				</tr>
				<tr>
					<td>Носик</td>
					<td>80 грн</td>
				</tr>
				<tr>
					<td>Носик та вусиків</td>
					<td>100 грн</td>
				</tr>
				<tr>
					<td>Пахви</td>
					<td>140 грн</td>
				</tr>
				<tr>
					<td>Поясниця</td>
					<td>140 грн</td>
				</tr>
				<tr>
					<td>Ноги повністю</td>
					<td>420 грн</td>
				</tr>
				<tr>
					<td>Ноги нижче коліна(голені)</td>
					<td>265 грн</td>
				</tr>
				<tr>
					<td>Ноги вище коліна(бедра)</td>
					<td>300 грн</td>
				</tr>
				<tr>
					<td>Глибоке бікіні</td>
					<td>350 грн</td>
				</tr>
				<tr>
					<td>Зона бікіні</td>
					<td>290 грн</td>
				</tr>
				<tr>
					<th>Шугаринг цукровою пастою:</th>
				</tr>
				<tr>
					<td>Зона бікіні</td>
					<td>260 грн</td>
				</tr>
				<tr>
					<td>Глибоке бікіні</td>
					<td>290 грн</td>
				</tr>
				<tr>
					<td>Ноги повністю</td>
					<td>370 грн</td>
				</tr>
				<tr>
					<td>Ноги до колін(бедра)</td>
					<td>220 грн</td>
				</tr>
				<tr>
					<td>Ноги нижче колін(голені)</td>
					<td>220 грн</td>
				</tr>
				<tr>
					<td>Пахви</td>
					<td>120 грн</td>
				</tr>
				<tr>
					<td>Руки повністю</td>
					<td>220 грн</td>
				</tr>
				<tr>
					<td>Руки нижче локтя</td>
					<td>125 грн</td>
				</tr>
				<tr>
					<td>Руки до локтя</td>
					<td>180 грн</td>
				</tr>
				<tr>
					<td>Лице</td>
					<td>100 грн</td>
				</tr>
				<tr>
					<td>Вусики</td>
					<td>70 грн</td>
				</tr>
				<tr>
					<td>Носик та вусики</td>
					<td>100 грн</td>
				</tr>
				<tr>
					<td>Спинка</td>
					<td>100 грн</td>
				</tr>

				<tr>
					<th>Шугаринг чоловічий:</th>
				</tr>
				<tr>
					<td>Ноги повністю</td>
					<td>500 грн</td>
				</tr>
				<tr>
					<td>Ноги до колін</td>
					<td>330 грн</td>
				</tr>
				<tr>
					<td>Ноги нижче колін</td>
					<td>330 грн</td>
				</tr>
				<tr>
					<td>Плечі</td>
					<td>130 грн</td>
				</tr>
				<tr>
					<td>Груди</td>
					<td>320 грн</td>
				</tr>
				<tr>
					<td>Пахви</td>
					<td>190 грн</td>
				</tr>
				<tr>
					<td>Живіт</td>
					<td>320 грн</td>
				</tr>
				<tr>
					<td>Полоска на животі</td>
					<td>110 грн</td>
				</tr>
				<tr>
					<td>Руки нижче локтя</td>
					<td>250 грн</td>
				</tr>
				<tr>
					<td>Руки вище локтя</td>
					<td>320 грн</td>
				</tr>
				<tr>
					<td>Руки повністю</td>
					<td>450 грн</td>
				</tr>
				<tr>
					<td>Лобок</td>
					<td>440 грн</td>
				</tr>
				<tr>
					<td>Глибоке бікіні</td>
					<td>- грн</td>
				</tr>
				<tr>
					<td>Ягодиці</td>
					<td>330 грн</td>
				</tr>
				<tr>
					<td>Спина повністю</td>
					<td>590 грн</td>
				</tr>
				<tr>
					<td>Поясниця</td>
					<td>330 грн</td>
				</tr>
			</table>
		</Layout>
	);
};

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
      }
      fields {
        slug
      }
      html
    }
  }
`;

export default Prices;
