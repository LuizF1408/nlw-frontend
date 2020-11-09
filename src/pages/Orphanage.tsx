import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo,  } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import Sidebar from "../components/Sidebar";
import mapIcon from '../utils/mapIcon'
import '../styles/pages/orphanage.css'
import api from "../services/api";

interface Orphanage{
  latitude:number;
  longitude:number;
  name:string;
  description:string;
  instructions:string;
  opening_hours:string;
  open_on_weekends:string;
  images:Array<{
    url:string;
  }>;
  
}

interface RouteParams {
  id:string;
}

export default function Orphanage() {
  const params = useParams<RouteParams>();
  const [orphanage,setOrphanage] = useState<Orphanage>();
  


  useEffect(() => {
      api.get(`orphanages/${params.id}`).then(response =>{
          setOrphanage(response.data);
      });
      
  
  }, [params.id]);
 if(!orphanage){
   return <p>Carregando...</p>
 }

  return (
    <div id="page-orphanage">
      <Sidebar/>

      <main>
        <div className="orphanage-details">
          <img src={orphanage.images[0].url} alt={orphanage.name} />

          <div className="images">
            <button className="active" type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
          </div>
          
          <div className="orphanage-details-content">
           <h1>{orphanage.name}</h1>
            <p>{orphanage.description}</p>

            <div className="map-container">
              <Map 
                center={[orphanage.latitude,orphanage.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                
                <TileLayer 
                  url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                />
                <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude,orphanage.longitude]} />
              </Map>

              <footer>
                <a href="">Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
               {orphanage.opening_hours}
              </div>
              <div className="open-on-weekends dont-open">
                <FiInfo size={32} color="#FF669D" />
                Não atendemos <br />
                fim de semana
              </div>
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}