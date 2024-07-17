import { IconsButtonsList } from '../_ui/IconsButtonsList';
import { ImageCarousel } from '../_ui/ImageCarousel';

const page = () => {
    return (
        <div className="flex flex-col items-center">
            <IconsButtonsList />
            <div className="max-w-[1400px] h-[250px] w-full ">
                <ImageCarousel />
            </div>
        </div>
    );
};

export default page;
