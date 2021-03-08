import Container from "../../common/container/Container";
import Li from "../../common/li/Li";
import Link from "../../common/link/Link";
import Span from "../../common/span/Span";
import Ul from "../../common/ul/Ul";

import s from "./BreadCrumbs.module.scss"

const BreadCrumbs = (props) => {
	return (
		<Container
			value={
				<Ul
					className={s.ul}
					valueItem1={
						<Li
							className={s.li}
							value={
								<Link
									className={s.link}
									href={props.href1}
									value={props.value1}
								/>
							}
						/>
					}
					valueItem2={
						<Li
							className={s.li}
							value={
								<Link
									className={s.link}
									href={props.href2}
									value={props.value2}
								/>
							}
						/>
					}

					valueItem3={
						<Li
							className={s.li}
							value={
								<Link
									className={s.link}
									href={props.href3}
									value={props.value3}
								/>
							}
						/>
					}
				/>
			}
		/>
	);
}

export default BreadCrumbs;