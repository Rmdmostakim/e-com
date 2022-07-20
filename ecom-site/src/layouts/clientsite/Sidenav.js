import { AiOutlineBars } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Classes from '../../assets/css/sidenav.module.css';
import Submenu from '../../components/clientsite/Submenu';

export default function Sidenav() {
    const { categories } = useSelector((state) => state.products);
    return (
        <div className={Classes.sidenav}>
            <h5 className={`${Classes.title} p-2`}>
                <AiOutlineBars />
                &ensp; All Categories
            </h5>
            <div className={Classes.sidemenu}>
                {categories &&
                    categories.map((data) => (
                        <Submenu
                            catName={data.name}
                            key={data.slug_id}
                            subCategory={data.category}
                        />
                    ))}
            </div>
        </div>
    );
}
