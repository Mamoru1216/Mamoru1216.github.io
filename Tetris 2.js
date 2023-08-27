Content-Type: text/plain;
	charset=us-ascii
Content-Transfer-Encoding: quoted-printable
From: gefu62cteb@i.softbank.jp
Mime-Version: 1.0 (1.0)
Date: Sun, 27 Aug 2023 13:59:38 +0900
Message-Id: <BB38D687-92A4-444E-AAD2-149C9C4AB76A@i.softbank.jp>
To: =?utf-8?B?5rC45LqV6JG1?= <spiderverse2022@icloud.com>

const rotateButton =3D document.createElement('button');
rotateButton.textContent =3D 'Rotate';
rotateButton.addEventListener('click', () =3D> tetriminoRotation =3D (tetrim=
inoRotation + 90) % 360);

const moveRightButton =3D document.createElement('button');
moveRightButton.textContent =3D 'Move Right';
moveRightButton.addEventListener('click', () =3D> tetriminoPosition.x +=3D 1=
);

const moveLeftButton =3D document.createElement('button');
moveLeftButton.textContent =3D 'Move Left';
moveLeftButton.addEventListener('click', () =3D> tetriminoPosition.x -=3D 1)=
;

const accelerateButton =3D document.createElement('button');
accelerateButton.textContent =3D 'Accelerate';
accelerateButton.addEventListener('click', () =3D> tetriminoPosition.y +=3D 1=
);

document.body.appendChild(rotateButton);
document.body.appendChild(moveRightButton);
document.body.appendChild(moveLeftButton);
document.body.appendChild(accelerateButton);


