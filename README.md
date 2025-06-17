# krea-remove-censorship

## Table of Contents

- [krea-remove-censorship](#krea-remove-censorship)
  - [Table of Contents](#table-of-contents)
  - [How it works](#how-it-works)
  - [Installation](#installation)
    - [Firefox](#firefox)
    - [Chromium (Chrome, Edge, Brave, etc.)](#chromium-chrome-edge-brave-etc)
  - [Español](#español)
    - [Cómo funciona](#cómo-funciona)
    - [Instalación](#instalación)
      - [Firefox](#firefox-1)
      - [Chromium (Chrome, Edge, Brave, etc.)](#chromium-chrome-edge-brave-etc-1)

---

## How it works

**krea-remove-censorship** is a browser extension that removes image censorship from Krea Realtime by modifying the HTTP response of the `POST https://krea.ai/api/prompt` request.  
The extension intercepts this request and forces the response to `{ m: false }`.  
If the value of `m` is `true`, Krea detects the image as NSFW (Not Safe For Work) and censors it. By setting it to `false`, censorship is bypassed.

- Intercepts all POST requests to `https://krea.ai/api/prompt`.
- Replaces the server response with `{ m: false }`, ensuring images are not flagged as NSFW.

---

## Installation

### Firefox

1. Download the file `kreaUncensuredFirefox.zip` from the [releases page](https://github.com/lueyo/krea-remove-censorship/releases).
2. Open Firefox and go to `about:addons`.
3. Click the gear icon ⚙️ and select **"Install Add-on From File..."**.
4. Select the downloaded `kreaUncensuredFirefox.zip` file.
5. Confirm the installation.

### Chromium (Chrome, Edge, Brave, etc.)

1. Download the file `kreaUncensuredChromium.zip` from the [releases page](https://github.com/lueyo/krea-remove-censorship/releases).
2. Extract the ZIP file to a folder on your computer.
3. Open your browser and go to `chrome://extensions/`.
4. Enable **Developer mode** (top right).
5. Click **"Load unpacked"** and select the folder where you extracted the extension.
6. The extension will now be installed.

---

## Español

### Cómo funciona

**krea-remove-censorship** es una extensión de navegador que elimina la censura de imágenes en Krea Realtime modificando la respuesta HTTP de la petición `POST https://krea.ai/api/prompt`.  
La extensión intercepta esta petición y fuerza la respuesta a `{ m: false }`.  
Si el valor de `m` es `true`, Krea detecta la imagen como NSFW (no apta para todo público) y la censura. Al ponerlo en `false`, se evita la censura.

- Intercepta todas las peticiones POST a `https://krea.ai/api/prompt`.
- Reemplaza la respuesta del servidor por `{ m: false }`, asegurando que las imágenes no sean marcadas como NSFW.

---

### Instalación

#### Firefox

1. Descarga el archivo `kreaUncensuredFirefox.zip` desde la [página de releases](https://github.com/lueyo/krea-remove-censorship/releases).
2. Abre Firefox y ve a `about:addons`.
3. Haz clic en el icono de engranaje ⚙️ y selecciona **"Instalar complemento desde archivo..."**.
4. Selecciona el archivo `kreaUncensuredFirefox.zip` que descargaste.
5. Confirma la instalación.

#### Chromium (Chrome, Edge, Brave, etc.)

1. Descarga el archivo `kreaUncensuredChromium.zip` desde la [página de releases](https://github.com/lueyo/krea-remove-censorship/releases).
2. Extrae el archivo ZIP en una carpeta de tu ordenador.
3. Abre tu navegador y ve a `chrome://extensions/`.
4. Activa el **Modo desarrollador** (arriba a la derecha).
5. Haz clic en **"Cargar descomprimida"** y selecciona la carpeta donde extrajiste la extensión.
6. La extensión quedará instalada.

---

Enjoy uncensored images on Krea Realtime!  
¡Disfruta de imágenes sin censura en Krea Realtime!
