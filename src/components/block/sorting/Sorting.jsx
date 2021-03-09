import Li from "./../../common/li/Li";
import Link from "./../../common/link/Link";

import s from "./Sorting.module.scss"


const Sorting = (props) => {
    return (
        <Li
            className={s.sorting}
            value={
                <Link
                    className={s.sortingLink}
                    href={props.href}
                    value={props.value}
                />
            }
        />
    );
}

export default Sorting;