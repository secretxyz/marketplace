import NiceAvatar, { genConfig } from 'react-nice-avatar'

const Avatar = (props) => {
    if (props.image) {
        return (
            <div className={props.className}>
                <img src={props.image} alt="" />
            </div>
        )
    } else {
        const config = genConfig(props.name);
        return (
            <NiceAvatar className={props.className} {...config} />
        );
    }
}

export default Avatar;