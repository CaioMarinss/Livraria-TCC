import { Link } from "react-router-dom";
import { addLivro, auth } from "../BackEnd/Firebase";
import { useEffect, useState } from "react";
function CadL() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
                console.log('logado')
            } else {
                setIsLoggedIn(false);
                console.log('deslogado');
                window.location.href = '/';
            }

        })
        return () => unsubscribe();
    });

    const verLivro = () => {
        window.location.href = '/livros'
    }

    function RegistrarLivro() {
        let nome = document.getElementById('nomeR').value
        let editora = document.getElementById('editoraR').value
        let imagem = document.getElementById('imagemR').value
        let materia = document.getElementById('materiaR').value
        let validade = document.getElementById('validadeR').value
        let quantidade = document.getElementById('quantidadeR').value
        addLivro(nome,
            editora,
            imagem,
            materia,
            quantidade,
            validade);

        document.getElementById('my_modal_4').showModal();
    }
    return (
        <div className="App">
            <div className="hero m-0">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        <svg className="svg" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="500" viewBox="0 0 655.04715 473.4057" >
                            <path d="M787.31056,255.89377c-1.65466-12.13655-3.72987-25.16694-12.28987-33.92808a28.78566,28.78566,0,0,0-41.59054.43047c-6.23108,6.64735-8.98285,15.98128-9.23469,25.089s1.77661,18.11434,4.02681,26.94334a83.04327,83.04327,0,0,0,34.65826-6.82181,55.84219,55.84219,0,0,1,8.30984-3.26239c2.88751-.73493,4.94581,1.11445,7.63182,2.404l1.47445-2.82319c1.207,2.24618,4.94435,1.58037,6.3-.57936C787.95205,261.18611,787.65511,258.42024,787.31056,255.89377Z" transform="translate(-272.47643 -213.29715)" fill="#2f2e41" />

                            <path d="M737.57332,307.13788l3.44812-17.61353L715.1681,278.3319l-46.21928-22.143a10.27075,10.27075,0,1,0-7.44548,11.5L705.511,294.84741Z" transform="translate(-272.47643 -213.29715)" fill="#ffb8b8" />

                            <path d="M720.21831,304.15781l18.725-19.1418.37023.11261c.23288.07053,23.49781,7.16307,38.32927,14.37044a12.63351,12.63351,0,0,1,6.96921,8.03865,13.2503,13.2503,0,0,1-4.15554,13.92014,14.17281,14.17281,0,0,1-15.15882,2.41334Z" transform="translate(-272.47643 -213.29715)" fill="#00a8f4" /><polygon points="447.684 175.017 500.338 189.087 510.971 139.346 462.642 124.387 447.684 175.017" fill="#ffb8b8" />

                            <path d="M778.708,374.81334l-51.4362-11.82883L717.42211,339.112a18.26275,18.26275,0,0,1,6.58613-18.61415l18.79293-15.86613,10.07455-12.86951-1.09686-6.82015a5.9078,5.9078,0,0,1,3.93786-6.4325l13.42683-4.815a6.2481,6.2481,0,0,1,7.88115,3.27734l1.42276,3.29287s6.07151,2.85713,9.4948,4.46428a13.74125,13.74125,0,0,1,7.43067,8.41824,69.65979,69.65979,0,0,1-3.9496,51.1518Z" transform="translate(-272.47643 -213.29715)" fill="#00a8f4" />

                            <path d="M321.26739,628.22726l-24.86987-6.655a83.06563,83.06563,0,0,1-1.23506-39.94776c10.85,21.44784,39.98979,25.4917,57.25227,42.21709A49.96443,49.96443,0,0,1,367.073,664.59315l5.95764,17.2599a83.72444,83.72444,0,0,1-62.45381-31.84171,80.8743,80.8743,0,0,1-10.28587-17.488C310.69751,630.99881,321.26739,628.22726,321.26739,628.22726Z" transform="translate(-272.47643 -213.29715)" fill="#f2f2f2" />

                            <path d="M630.24665,686.70285H386.48931a24.668,24.668,0,0,1-24.63995-24.64012V339.30027a24.668,24.668,0,0,1,24.64-24.64012H630.24665a24.668,24.668,0,0,1,24.64013,24.64012V662.06273A24.668,24.668,0,0,1,630.24665,686.70285Z" transform="translate(-272.47643 -213.29715)" fill="#e6e6e6" />

                            <path d="M537.21155,666.72452h-133.588a22.46122,22.46122,0,0,1-22.43542-22.436V357.0741a22.46075,22.46075,0,0,1,22.43542-22.43541h209.4887a22.46075,22.46075,0,0,1,22.43542,22.43541V568.38842A98.44763,98.44763,0,0,1,537.21155,666.72452Z" transform="translate(-272.47643 -213.29715)" fill="#fff" />

                            <path d="M592.21441,389.77863H424.52152a5.469,5.469,0,1,1-.01368-10.938H592.21441a5.469,5.469,0,0,1,.01368,10.938Z" transform="translate(-272.47643 -213.29715)" fill="#00a8f4" />

                            <path d="M592.21441,411.38946H424.52152a5.46929,5.46929,0,0,1,0-10.93858H592.21441a5.46929,5.46929,0,0,1,0,10.93858Z" transform="translate(-272.47643 -213.29715)" fill="#00a8f4" />

                            <path d="M497.21233,433.00029H424.52149a5.46929,5.46929,0,1,1,0-10.93858h72.69084a5.46929,5.46929,0,0,1,0,10.93858Z" transform="translate(-272.47643 -213.29715)" fill="#00a8f4" />

                            <path d="M592.21441,478.26142H424.52152a5.469,5.469,0,1,1-.01368-10.938H592.21441a5.469,5.469,0,0,1,.01368,10.938Z" transform="translate(-272.47643 -213.29715)" fill="#e4e4e4" />

                            <path d="M592.21441,499.87225H424.52152a5.46929,5.46929,0,0,1,0-10.93858H592.21441a5.46929,5.46929,0,0,1,0,10.93858Z" transform="translate(-272.47643 -213.29715)" fill="#e4e4e4" />

                            <path d="M497.21233,521.483H424.52149a5.46929,5.46929,0,1,1,0-10.93858h72.69084a5.46929,5.46929,0,1,1,0,10.93858Z" transform="translate(-272.47643 -213.29715)" fill="#e4e4e4" />

                            <path d="M592.21441,566.74414H424.52152a5.469,5.469,0,1,1-.01368-10.938H592.21441a5.469,5.469,0,0,1,.01368,10.938Z" transform="translate(-272.47643 -213.29715)" fill="#e4e4e4" />

                            <path d="M592.21441,588.355H424.52152a5.46929,5.46929,0,0,1,0-10.93858H592.21441a5.46929,5.46929,0,0,1,0,10.93858Z" transform="translate(-272.47643 -213.29715)" fill="#e4e4e4" />

                            <path d="M497.21233,609.9658H424.52149a5.4693,5.4693,0,0,1,0-10.93858h72.69084a5.4693,5.4693,0,0,1,0,10.93858Z" transform="translate(-272.47643 -213.29715)" fill="#e4e4e4" /><circle cx="370.37338" cy="107.64026" r="71.09969" fill="#00a8f4" />

                            <path d="M642.84977,382.18768A71.09,71.09,0,0,1,571.945,316.09274c-.11525,1.65523-.19489,3.32029-.19489,5.00488a71.09968,71.09968,0,0,0,142.19935,0c0-1.68459-.07964-3.34965-.19489-5.00488A71.09005,71.09005,0,0,1,642.84977,382.18768Z" transform="translate(-272.47643 -213.29715)" fill="#231f20" opacity="0.16" />

                            <path d="M642.85,355.6823a8.91461,8.91461,0,0,1-8.9043-8.9043V295.257a8.90406,8.90406,0,1,1,17.80811,0v51.521A8.9142,8.9142,0,0,1,642.85,355.6823Z" transform="translate(-272.47643 -213.29715)" fill="#fff" />

                            <path d="M608.185,321.01775a8.91461,8.91461,0,0,1,8.90429-8.9043h51.521a8.90406,8.90406,0,1,1,0,17.80811h-51.521A8.91419,8.91419,0,0,1,608.185,321.01775Z" transform="translate(-272.47643 -213.29715)" fill="#fff" />

                            <path d="M749.73026,336.12525l-15.12956-9.65517-19.87785,19.9634-37.52231,34.90863a10.27075,10.27075,0,1,0,7.97721,11.13774L726.55817,361.465Z" transform="translate(-272.47643 -213.29715)" fill="#ffb8b8" />
                            <path d="M740.60549,351.18538,729.6448,326.75426l.24-.30343c.151-.19052,15.2663-19.24629,27.40134-30.41072a12.63381,12.63381,0,0,1,10.03145-3.54358,13.25745,13.25745,0,0,1,11.43348,8.9617,14.1712,14.1712,0,0,1-3.30149,14.98926Z" transform="translate(-272.47643 -213.29715)" fill="#00a8f4" /><circle cx="478.03159" cy="33.80024" r="23.78567" fill="#ffb8b8" /><polygon points="441.077 456.369 431.244 456.369 426.564 418.442 441.077 418.442 441.077 456.369" fill="#ffb8b8" /><path d="M718.74308,686.70285h-7.05162l-1.25869-6.65757-3.22367,6.65757H688.50652a4.20417,4.20417,0,0,1-2.389-7.66381l14.93533-10.31487V661.9936l15.70936.93763Z" transform="translate(-272.47643 -213.29715)" fill="#2f2e41" /><polygon points="564.317 448.015 555.181 451.652 536.806 418.145 550.29 412.777 564.317 448.015" fill="#ffb8b8" /><path d="M847.91639,675.22176l-6.55162,2.608-3.63169-5.72-.53284,7.37776-17.37645,6.917a4.20417,4.20417,0,0,1-5.054-6.23686l10.06143-15.10722-2.48926-6.25334,14.94226-4.93885Z" transform="translate(-272.47643 -213.29715)" fill="#2f2e41" /><path d="M717.34637,652.24291H697.00672l5.62123-95.55913-4.10943-64.77159.00864-.05188L713.85358,399.013a39.21218,39.21218,0,0,1,9.39572-19.69433l.18658-.21025,51.29147,12.66779,5.15705,11.759c17.60912,10.47337,23.17029,69.53271,23.39874,72.04843l7.45523,73.62394,18.23624,90.2337-12.84255,6.91459-.2148-.42778-40.54277-80.61954-25.6041-85.0184-16.39677,76.51829Z" transform="translate(-272.47643 -213.29715)" fill="#2f2e41" /><path d="M779.96517,248.21676c-.84171-5.52877-1.7208-11.10385-3.69814-16.30974s-5.16459-10.082-9.73665-13.03107c-7.23909-4.66912-16.61147-3.76861-24.72769-1.08281-6.27661,2.07709-12.40368,5.23408-16.82988,10.30946-4.42645,5.07543-6.91245,12.31749-5.26594,18.95377q12.98639-3.06819,25.97253-6.13643l-.94771.66968A20.91064,20.91064,0,0,1,755.89151,256.134a21.66552,21.66552,0,0,1-4.57058,17.99384q8.85671-3.14187,17.71341-6.28364c3.64451-1.29283,7.54507-2.78248,9.70615-6.09858C781.24617,257.90093,780.664,252.805,779.96517,248.21676Z" transform="translate(-272.47643 -213.29715)" fill="#2f2e41" /><path id="fd990326-c176-439f-9263-07fe4201e145-154" data-name="Path 2960" d="M273.72343,686.47368h652.5532a1.247,1.247,0,0,0,0-2.494H273.72343a1.247,1.247,0,0,0,0,2.494Z" transform="translate(-272.47643 -213.29715)" fill="#ccc" />
                        </svg>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                        <div className="card-body">
                            <h2 className="text-5xl font-bold">Cadastrar</h2>
                            <div className="form-control">
                                <span className="label-text">Nome: </span>
                                <input id="nomeR" type="text" className="input input-sm
                                input-bordered"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Editora: </span>
                                </label>
                                <input type="text" id="editoraR" className="input
                                input-sm input-bordered"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Imagem: </span>
                                </label>
                                <input id="imagemR" type="text" placeholder='Mande
                                somente o Url da imagem' className="input input-sm input-bordered" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text"> Materia: </span>
                                </label>
                                <select id="materiaR" className="select select-bordered
                                select-sm w-full max-w-xs">
                                    <option disabled selected> Selecionar</option>
                                    <option>Matemática</option>
                                    <option>Ciências</option>
                                    <option>Biologia</option>
                                    <option>Português</option>
                                    <option>Inglês</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Validade: </span>
                                </label>
                                <input id="validadeR" type="text" placeholder=""
                                    className="input input-sm input-bordered" />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantidade: </span>
                                </label>
                                <input id="quantidadeR" type="number" class="num"
                                    className=" input-xs input input-sm input-bordered" />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" style={{
                                    backgroundColor: 'rgb(0, 168, 244)'
                                }}
                                    onClick={RegistrarLivro}>Cadastrar</button>

                                <dialog id="my_modal_4" className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <h3 className="font-bold text-lg">Cadastrado com sucesso!</h3>
                                        <p className="py-4">Seu Livro foi cadastrado com sucesso.</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn" onClick={verLivro}>Ver livros</button>
                                                <button className="btn">Fechar</button>

                                            </form>
                                        </div>
                                    </div>
                                </dialog>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CadL;
