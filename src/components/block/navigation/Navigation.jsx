import Link from "./link/Link"
import s from "./Navigation.module.scss"

const Navigation = (props) => {
	console.log(props);
	return (
		<section className={s.Navigation} style={props.style}>
			<div className={s.wrapper} style={props.styleWrapper}>
				<ul className={s.list} style={props.styleList}>
					{props.link0 &&
						<Link
							text={props.link0.text}
							href={props.link0.href}
						/>
					}
					{props.link1 &&
						<Link
							text={props.link1.text}
							href={props.link1.href}
						/>
					}
					{props.link2 &&
						<Link
							text={props.link2.text}
							href={props.link2.href}
						/>}
					{props.link3 &&
						<Link
							text={props.link3.text}
							href={props.link3.href}
						/>
					}
					{props.link4 &&
						<Link
							text={props.link4.text}
							href={props.link4.href}
						/>
					}
					{props.link5 &&
						<Link
							text={props.link5.text}
							href={props.link5.href}
						/>
					}
					{props.link6 &&
						<Link
							text={props.link6.text}
							href={props.link6.href}
						/>
					}
					{props.link7 &&
						<Link
							text={props.link7.text}
							href={props.link7.href}
						/>
					}
				</ul>
			</div>
		</section >
	);
}

export default Navigation;
