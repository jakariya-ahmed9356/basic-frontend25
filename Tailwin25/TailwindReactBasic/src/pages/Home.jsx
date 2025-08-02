import FlexBox from "../components/FlexBoxCom";
import GridBox from "../components/GridBoxCom";
import Theme from "../components/ThemeCom";

export default function Home() {
    return (
        <div>
            {/* Theme Color  */}
            <Theme />

            {/* Flex Box Basic  */}

            <FlexBox />

            {/* Grid Box Basic  */}

            <GridBox />

        </div>
    );
}