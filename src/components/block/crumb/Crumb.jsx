import Li from "../../common/li/Li"
import Link from "../../common/link/Link";

import s from "./Crumb.module.scss"


const Crumb = (props) => {
    return (
        <Li
            className={s.classItem}
            value={
                <Link
                    className={s.classLink}
                    href={props.href}
                    value={props.value}
                />
            }
        />
    );
}

export default Crumb;