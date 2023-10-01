/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import {
  StyledInfoDisplay,
  StyledSubmitAnimalForm,
  StyledSubtleInfo,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routing/routes';
import Webcam from 'react-webcam';
import { useAnimalService } from '../../../services/AnimalService/AnimalServiceContext';

export const SubmitAnimalForm = () => {
  const { postAnimal } = useAnimalService();
  const camRef = useRef<any>(null);
  const [localization, setLocalization] = useState<[number, number]>([0, 0]);
  const navigate = useNavigate();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoConstraints = {
    width: window.screen.width * 0.8,
    height: window.screen.height * 0.8,
    facingMode: 'environment',
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setIsCameraOpen(true);
        setLocalization([coords.latitude, coords.longitude]);
      },
      () => {
        navigate(`/${ROUTES.HOME}`);
      }
    );
  }, []);

  const handleTakePicture = () => {
    const pic = camRef.current.getScreenshot();
    postAnimal({ frame: pic, localization }).then((res) => {
      if (res.status < 300) {
        res.json().then((json) => {
          alert(`Detected: ${json.detectedAnimal}`);
          navigate(`/${ROUTES.HOME}`);
        });
      } else if (res.status === 406) alert("We couldn't recognize any animal");
      else {
        alert('Something went wrong');
      }
    });
  };

  return (
    <StyledSubmitAnimalForm>
      <Webcam
        ref={camRef}
        open={isCameraOpen}
        videoConstraints={videoConstraints}
        onClick={handleTakePicture}
        screenshotFormat="image/png"
      />
      <StyledSubtleInfo onClick={handleTakePicture}>
        Hit the screen to instantly send us the captured animal's photo - leave
        the recognition part to us {';)'}
      </StyledSubtleInfo>
      <StyledInfoDisplay>
        Rotate the screen to have a horizontal view and enable the camera
      </StyledInfoDisplay>
    </StyledSubmitAnimalForm>
  );
};
