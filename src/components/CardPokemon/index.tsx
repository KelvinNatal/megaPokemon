import { Results } from "../../types/results";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  RefObject,
  useEffect,
  useState,
} from "react";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";
import CardPoke from "../CardPoke";
import "./style.css";
import axios from "axios";
import { data } from "../../types/data";

type Props = {
  pokemon: Results;
  name: string;
};

const CardPokemon = ({ pokemon, name }: Props) => {
  const [modalShow, setModalShow] = useState(false);
  const [poke, setPoke] = useState<data>();
  const [poke2, setPoke2] = useState([]);

  function MyVerticallyCenteredModal(
    props: JSX.IntrinsicAttributes &
      Omit<
        Pick<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          "key" | keyof HTMLAttributes<HTMLDivElement>
        > & {
          ref?:
            | ((instance: HTMLDivElement | null) => void)
            | RefObject<HTMLDivElement>
            | null
            | undefined;
        },
        BsPrefixProps<"div"> & ModalProps
      > &
      BsPrefixProps<"div"> &
      ModalProps & { children?: ReactNode }
  ) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal"
      >
        <Modal.Body>
          <CardPoke name={pokemon.name} />
          <button className="bot" onClick={props.onHide}>
            Close
          </button>
        </Modal.Body>
      </Modal>
    );
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
      setPoke(response.data);
      setPoke2(response.data);
    });
  }, []);

  return (
    <>
		
        <div className="pokemonContainer" onClick={() => setModalShow(true)}>		 
						
          <img
            src={poke?.sprites.front_default}
            className="card-img-top img-fluid"
          />
          <div className="card-body">
            <h5 className=" tituloPrincipal card-title">{pokemon.name}</h5>
           			 <p className="card-text"></p>
          </div>			
        </div>
			

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default CardPokemon;
