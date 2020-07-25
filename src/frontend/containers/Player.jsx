import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import '../assets/styles/components/Player.scss';
import {getVideoSource} from '../actions';
import NotFound from '../containers/NotFound';


const Player = props => {

    const { id } = props.match.params;
    const [ loading, setLoading ] = useState(true);
    const hasPlaying = Object.keys(props.playing).length > 0;
    

    useEffect(() => {
        props.getVideoSource(id);
        setLoading(false);
    }, []); 

    if (loading) return <h2>Cargando video...</h2>

    console.log(props.playing.id);
    

    return hasPlaying ? (
        <div className="Player">
            <iframe width="1080" height="720"
            src={props.playing.source}>
            </iframe>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    )
    :
    <NotFound />
};

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
};

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);