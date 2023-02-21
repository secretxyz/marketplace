import NiceAvatar, { genConfig } from 'react-nice-avatar'
import { getProfileImageLink } from '../../Helpers/Utils';

const Avatar = (props) => {
    if (props.image) {
        return (
            <div className={props.className}>
                <img src={getProfileImageLink(props.image)} alt="" />
            </div>
        )
    } else if (props.name) {
        const config = genConfig(props.name);
        return (
            <NiceAvatar className={props.className} {...config} />
        );
    } else {
        return <></>;
    }
}

export default Avatar;