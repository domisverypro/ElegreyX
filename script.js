// plugins 
const pluginsData = [
  {
    id: 1,
    name: "Sapphire",
    version: "v2.1.5",
    author: "Boris FX",
    description: "boris fx sapphire is a comprehensive collection of high-quality visual effects and transitions for after effects and premiere pro. featuring over 270 effects, it offers tools for everything from color grading to stylized looks, cinematic lighting effects, and advanced transitions. with cutting-edge technology like advanced noise reduction, glows, and lens flares, it’s ideal for professional film and television production, delivering top-tier creative control.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0379APSSMJ7CtwjSIfcm_toQ0v9kH3mkdwo3y34GdzEekpT2phmwosI4xNLMH2Nt3akA&usqp=CAU",
    tags: ["VFX", "3d", "Effects"],
    platform: "windows",
    category: "VFX",
    downloadLinks: {
      windows: "https://drive.google.com/file/d/1c4yidv0Mfn4wQU9kyUVzd4cpu2ANgMq3/view?usp=sharing",
    },
    isGoogleDrive: true,
    fileSize: "224.4 MB"
  },
  {
    id: 2,
    name: "Crossphere Bokeh",
    version: "V1.3.2",
    author: "crossphere",
    description: "crossphere bokeh is a professional-grade after effects plugin designed to simulate realistic lens bokeh and depth-of-field effects. it offers customizable aperture shapes, focus distance controls, and light reaction settings, making it perfect for creating cinematic visuals, dreamy highlights, or realistic camera blur in post-production.",
    image: "https://aescripts.com/media/catalog/product/cache/1/aes_image_square/9df78eab33525d08d6e5fb8d27136e95/c/r/crossphere-bokeh_2_sq.jpg",
    tags: ["bokeh", "lens", "blur", "Effects", "cinematic", "depth of field",],
    platform: "windows",
    category: " effects, lens & blur",
    downloadLinks: {
      windows: "https://drive.google.com/file/d/1ZdOs3_zM2PII5rTpRvKlNjedVG16LBc0/view?usp=drive_link"
    },
    isGoogleDrive: true,
    fileSize: "1.8 MB"
  },
   {
    id: 3,
    name: "Datamosh",
    version: "v1.1.5",
    author: "aescripts",
    description: "datamosh v1.1.5 is a creative after effects plugin designed to simulate the popular datamoshing effect, which involves manipulating video frames to create glitchy, distorted visuals. ideal for music videos, experimental art, and motion graphics, it allows users to control the frame data, creating smooth transitions between frames or corrupting them for dramatic glitch effects. it's perfect for adding an edgy, digital aesthetic to any project.",
    image: "https://aescripts.com/media/catalog/product/cache/1/aes_image_square/9df78eab33525d08d6e5fb8d27136e95/d/a/datamosh2-sq.png",
    tags: ["glitch", "distortion", "datamoshing", "effects", "glitch art", "corruption"],
    platform: "windows",
    category: "distortion, glitch art, video effects",
    downloadLinks: {
      windows: "https://drive.google.com/file/d/1I8i8ZLVVpNhQED75H3dBSKTbDmtE4pJS/view?usp=drive_link"
    },
    isGoogleDrive: true,
    fileSize: "90.3 MB"
  },
  {
    id: 4,
    name: "Deep glow",
    version: "v1.2",
    author: "forbidden planet",
    description: "deep glow is an after effects plugin that adds natural-looking, high-quality glow effects to your footage. it simulates the appearance of glowing objects in a scene while maintaining the crispness and sharpness of the original shot.",
    image: "https://riztagar.com/wp-content/uploads/2024/02/Deep-glow.webp",
    tags: ["glow", "effects", "lighting"],
    platform: "windows",
    category: "lighting, effects",
    downloadLinks: {
      windows: "https://drive.google.com/file/d/1gd2SKXKxiKsrxUTKZWnvDdHUfsXyzuQH/view?usp=drive_link"
    },
    "isGoogleDrive": true,
    "fileSize": "1.2 MB"
  },
  {
    id: 5,
    name: "Element 3D",
    version: "",
    author: "videocopilot",
    description: "element 3d is a fast, GPU-accelerated 3d object-based plugin for after effects. it enables users to import, animate, and render 3d models directly in after effects, offering seamless integration with the rest of the effects.",
    image: "https://i0.wp.com/www.aufieroinformatica.com/wp-content/uploads/sites/7/2021/02/zzzzz.jpg?fit=720%2C479&ssl=1",
    tags: ["3D", "animation", "modeling", "rendering"],
    platform: "windows",
    category: "3d, rendering",
    downloadLinks: {
      windows: "https://drive.google.com/file/d/1tNALChKhbD8Fy6nF86L1HfJ1eIHSaV0i/view?usp=drive_link"
    },
    "isGoogleDrive": true,
    "fileSize": "18.6 MB"
  },
  {
    "id": 6,
    "name": "EZ TOOLS",
    "version": "",
    "author": "aescripts",
    "description": "ez tools is a collection of practical utilities designed to streamline after effects workflow, offering a suite of time-saving features like customizable shortcuts, keyframe tools, and layer utilities.",
    "image": "https://i.pinimg.com/736x/36/7c/02/367c026d4f7f7b307e2b668816875a44.jpg",
    "tags": ["utilities", "Utility", "shortcuts"],
    "platform": "windows",
    "category": "workflow, utilities",
    "downloadLinks": {
      "windows": "https://drive.google.com/file/d/1vRj70OJQaVybmIyPbVNwnUEbz4k1b6hd/view?usp=drive_link"
    },
    "isGoogleDrive": true,
    "fileSize": "25 K"
  },
  {
    "id": 7,
    "name": "Flow",
    "version": "1.4.0",
    "author": "motion vfx",
    "description": "flow is an advanced smooth animation plugin for after effects that creates fluid, organic motion with natural-looking easing, ideal for enhancing animations with a professional and polished feel.",
    "image": "https://aescripts.com/media/wysiwyg/renderTom/flow/interface-full.png",
    "tags": ["animation", "motion", "smooth"],
    "platform": "windows",
    "category": "motion graphics, animation",
    "downloadLinks": {
      "windows": "https://drive.google.com/file/d/1zFsej55yQduY_NQeuCk-qbv71tCHGceR/view?usp=drive_link"
    },
    "isGoogleDrive": true,
    "fileSize": "34.2 MB"
  },
  {
    "id": 8,
    "name": "Flow",
    "version": "v1.4.1",
    "author": "motion vfx",
    "description": "flow v1.4.1 is an updated version of the motion graphics plugin, offering even more features for creating smooth and natural animation flows. it enhances ease of use and flexibility for animators and motion designers.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOWNa0CiSZT5t2JTXxB8X2nshq8HHBX-XynQ&s",
    "tags": ["animation", "motion", "smooth"],
    "platform": "windows",
    "category": "motion graphics, animation",
    "downloadLinks": {
      "windows": "https://drive.google.com/file/d/1qAmKd1Z-XMy0B488ex6PE7_XAA_bXPNn/view?usp=drive_link"
    },
    "isGoogleDrive": true,
    "fileSize": "3.3 MB"
  },
  {
    "id": 9,
    "name": "Font manager",
    "version": "1.0.42",
    "author": "aescripts",
    "description": "font manager is an after effects plugin that makes managing fonts within your project easy, providing a streamlined way to find, preview, and apply fonts in your compositions.",
    "image": "https://aescripts.com/media/catalog/product/cache/1/aes_image_social/9df78eab33525d08d6e5fb8d27136e95/f/o/fontmanager_1080x1080.png",
    "tags": ["fonts", "utilities", "workflow"],
    "platform": "windows",
    "category": "workflow, utilities",
    "downloadLinks": {
      "windows": "https://drive.google.com/file/d/1W83LCiHn_nSCuRwLTf2YU-wnmbGEckFp/view?usp=drive_link"
    },
    "isGoogleDrive": true,
    "fileSize": "645 KB"
  },
  {
    "id": 10,
    "name": "Frischluft",
    "version": "",
    "author": "frischluft",
    "description": "frischluft is a powerful effects plugin collection for after effects, specializing in advanced color grading, exposure control, and lens effects, giving users cinematic control over their footage.",
    "image": "https://s3.amazonaws.com/east.toolfarm.com/boxcover_image/frischluft-flair.png",
    "tags": ["color grading", "lens effects", "exposure"],
    "platform": "windows",
    "category": "color grading, lens effects",
    "downloadLinks": {
      "windows": "https://drive.google.com/file/d/1jaeaLthlpKmWVQznJP6bZE518nWMb78g/view?usp=drive_link"
    },
    "isGoogleDrive": true,
    "fileSize": "2.6 MB"
  },
  {
    "id": 11,
    "name": "Glitchify",
    "version": "",
    "author": "aescripts",
    "description": "glitchify is a plugin that adds customizable glitch effects to footage, perfect for creating digital distortion, color shifts, and visual breaks in a composition.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVnKu0ayKzYXPdifJR6pLGL8r5Hu2loqgnw&s",
    "tags": ["glitch", "distortion", "effects"],
    "platform": "windows",
    "category": "distortion, glitch art",
    "downloadLinks": {
      "windows": "https://drive.google.com/file/d/13GFhtauQCkNDMc2FGWVoTP8c5DhtX948/view?usp=drive_link"
    },
    "isGoogleDrive": true,
    "fileSize": "513 KB"
  },
  {
    "id": 12,
    "name": "Joysticks n sliders",
    "version": "v1.7.1",
    "author": "aescripts",
    "description": "joysticks n sliders is a unique plugin that simplifies character rigging in after effects, allowing users to control animation with sliders and joysticks for more intuitive and natural character motion.",
    "image": "https://i.ytimg.com/vi/sMznIbcTZjc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBrqlWAbs_xpY5PgDJBHEZX7fK5rw",
    "tags": ["animation", "rigging", "character design"],
    "platform": "windows",
    "category": "animation, rigging",
    "downloadLinks": {
      "windows": "https://drive.google.com/file/d/1iuNXiU3ZkrgJX4SrJBt3ClLMECIrLkJ8/view?usp=drive_link"
    },
    "isGoogleDrive": true,
    "fileSize": "875 KB"
  },
  {
    "id": 13,
    "name": "Magic bullet looks",
    "version": "",
    "author": "red giant",
    "description": "magic bullet looks offers professional color grading tools for after effects, enabling users to apply cinematic looks, tweak color tones, and adjust contrast to enhance the mood and style of their footage.",
    "image": "https://macx.ws/uploads/posts/2014-10/1412928288_red_giant.png",
    "tags": ["color grading", "film looks", "effects"],
    "platform": "windows",
    "category": "color grading, film effects",
    "downloadLinks": {
      "windows": "https://drive.google.com/file/d/1Ty8-QdqVc5pwOOeWc-2FUkJpbmrzesGT/view?usp=drive_link"
    },
    "isGoogleDrive": true,
    "fileSize": "21 KB"
  },
  {
    "id": 14,
    "name": "Magic bullet suite",
    "version": "14.0.2",
    "author": "red giant",
    "description": "magic bullet suite is a comprehensive collection of color grading tools for after effects and premiere pro, offering everything from basic corrections to advanced film-style looks and adjustments.",
    "image": "https://i.ytimg.com/vi/3Mlom2xyaDM/maxresdefault.jpg",
    "tags": ["color grading", "film effects", "post-production"],
    "platform": "windows",
    "category": "color grading, film effects",
    "downloadLinks": {
      "windows": "https://drive.google.com/file/d/1sKvUAlDm4D3JQd0iiKpc8KURjWRFcYDs/view?usp=drive_link"
    },
    "isGoogleDrive": true,
    "fileSize": "263.1MB"
  },
  {
    "id": 15,
    "name": "Motion",
    "version": "v3.30",
    "author": "motion vfx",
    "description": "motion is an advanced plugin suite for after effects, focusing on creating smooth, professional motion graphics with tools for animating elements, applying transitions, and integrating effects.",
    "image": "https://i.ytimg.com/vi/McASqbIan_8/maxresdefault.jpg",
    "tags": ["motion", "animation", "effects"],
    "platform": "windows",
    "category": "motion graphics, animation",
    "downloadLinks": {
      "windows": "https://drive.google.com/file/d/13WHGV_iuIA30rF7HKDnNocoY317lzhQr/view?usp=drive_link"
    },
    "isGoogleDrive": true,
    "fileSize": "3.3 MB"
  },
  {
    "id": 16,
    "name": "OminoSuite",
    "version": "",
    "author": "omino",
    "description": "ominosuite is a collection of after effects tools that enhance workflow, adding customizable utilities and effects that streamline animation and visual effects creation.",
    "image": "https://sun9-22.userapi.com/impf/c540106/v540106845/1578f/8N_qQlRey5Y.jpg?size=604x404&quality=96&sign=707fcbb9016e75a6f05edf12150ba4ea&type=album",
    "tags": ["utilities", "workflow", "effects"],
    "platform": "windows",
    "category": "utilities, workflow",
    "downloadLinks": {
      "windows": "https://drive.google.com/file/d/1C95WhN_CoSciZT4y6BK9ZyBRHJQHfl6C/view?usp=drive_link"
    },
    "isGoogleDrive": true,
    "fileSize": "1.1 MB"
  },
  {
    "id": 17,
    "name": "PixDither",
    "version": "v1.12",
    "author": "aescripts",
    "description": "pixdither is an after effects plugin that allows users to apply dithering effects to footage, giving it a vintage, pixelated look, perfect for creative projects and stylized animations.",
    "image": "https://img.itch.zone/aW1hZ2UvMTA4MTkzLzUwMjAzMy5naWY=/original/pw8zR7.gif",
    "tags": ["dither", "pixelation", "effects"],
    "platform": "windows",
    "category": "effects, stylization",
    "downloadLinks": {
      "windows": "https://drive.google.com/file/d/14u82yAc-gJShSTxN3soy1pzdyIwSycnQ/view?usp=drive_link"
    },
    "isGoogleDrive": true,
    "fileSize": "239 KB"
  },
  {
    "id": 18,
    "name": "Pixel Sorter",
    "version": "1.0.2",
    "author": "aescripts",
    "description": "pixel sorter is a plugin that creates glitch effects by sorting pixels along various axes, allowing users to manipulate the data in unique and creative ways for distortion effects.",
    "image": "https://aescripts.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/e/aeps2.0_aescripts_header_2.jpg",
    "tags": ["glitch", "distortion", "pixel sorting"],
    "platform": "windows",
    "category": "distortion, glitch art",
    "downloadLinks": {
      "windows": "https://drive.google.com/file/d/1CQ8Kyao-pFvpI3oEoezUe6GyeWuUgmo7/view?usp=drive_link"
    },
    "isGoogleDrive": true,
    "fileSize": "175 KB"
  },
  {
    "id": 19,
    "name": "Plexus",
    "version": "v3.1.7",
    "author": "rowbyte",
    "description": "plexus is a powerful plugin for after effects that enables the creation of complex particle systems and organic animations. it’s ideal for creating 3d particle-based motion graphics and visual effects.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2aedduLMfW8uO48uj3z18X1sVKhqqJUMfEw&s",
    "tags": ["particles", "motion graphics", "3d effects"],
    "platform": "windows",
    "category": "3d, particles, effects",
    "downloadLinks": {
      "windows": "https://drive.google.com/file/d/1NCpn12xLkt4u7wpHl4XmKzfyjdDU_Ynn/view?usp=drive_link"
    },
    "isGoogleDrive": true,
    "fileSize": "17.9 MB"
  },
{
  id: 20,
  name: "Red Giant VFX Suite",
  version: "1.5",
  author: "Red Giant (Maxon)",
  description: "Red Giant VFX Suite is a comprehensive set of tools for After Effects, offering keying, tracking, cleanup, and visual effects compositing. It includes nine plugins, such as Supercomp, Primatte Keyer, and Knoll Light Factory, designed to streamline VFX workflows.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhpJiItJUbT_Hp1LCJaFihUnlGc4g6Oos2w7E3jrPXn6fuxrmDkzu9GPNtJkHc8ozZYo&usqp=CAU",
  tags: ["keying", "tracking", "compositing", "VFX", "cleanup"],
  platform: "windows",
  category: "Visual Effects, Compositing",
  downloadLinks: {
    windows: "https://drive.google.com/file/d/13fuDLufdJzpqxOhuzlcr0ayT6B0_oWdH/view?usp=drive_link"
  },
  isGoogleDrive: true,
  fileSize: "628.2 MB"
},
{
  id: 21,
  name: "RSMB",
  version: "v5.0.1",
  author: "RE:Vision Effects",
  description: "ReelSmart Motion Blur (RSMB) applies natural-looking motion blur by automatically tracking every pixel, enhancing the realism of motion in videos.",
  image: "https://www.lookae.com/wp-content/uploads/2024/06/RSMB-CHN.jpg",
  tags: ["motion blur", "optical flow", "video effects"],
  platform: "windows",
  category: "Motion Graphics, Video Effects",
  downloadLinks: {
    windows: "https://drive.google.com/file/d/1nYSpL0p4kRGOFlGzMAkMTFVhAuWMOUEq/view?usp=drive_link"
  },
  isGoogleDrive: true,
  fileSize: "22.6 MB"
},
{
  id: 22,
  name: "Superluminal Stardust",
  version: "1.4.0",
  author: "Superluminal",
  description: "Stardust is a modular 3D particle system for After Effects, featuring a node-based interface and the ability to create stunning particle and object-based motion graphics and effects.",
  image: "https://i.ytimg.com/vi/WVJWW7R1W4I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDhztTE_AXq3P5zaITdMES4J1YogA",
  tags: ["3D particles", "motion graphics", "node-based", "VFX"],
  platform: "windows",
  category: "3D, Particle Effects",
  downloadLinks: {
    windows: "https://drive.google.com/file/d/13jvFUpitxl6n18Ji3Cki5Htr2RMNoGvb/view?usp=drive_link"
  },
  isGoogleDrive: true,
  fileSize: "92.5 MB"
},
{
  id: 23,
  name: "TextEvo",
  version: "2.0.0",
  author: "Matthieu Wlazinski",
  description: "TextEvo is a text animation tool for After Effects, allowing users to animate text by letters, words, or lines with customizable delay settings.",
  image: "https://aescripts.com/media/catalog/product/a/e/aestextevo.png",
  tags: ["text animation", "typography", "motion graphics"],
  platform: "windows",
  category: "Text Animation, Motion Graphics",
  downloadLinks: {
    windows: "https://drive.google.com/file/d/1haJ6-ApKs-cC-HC6Wo29nS2kvYWBtOo9/view?usp=drive_link"
  },
  isGoogleDrive: true,
  fileSize: "514 KB"
},
{
  id: 24,
  name: "Topograph",
  version: "1.0.2",
  author: "aescripts",
  description: "Topograph is a procedural plugin for After Effects that creates elegant geometric shapes in 3D space, generating vector-like shapes that change over time.",
  image: "https://aescripts.com/media/catalog/product/cache/1/image/800x600/040ec09b1e35df139433887a97daa66f/t/i/title_aescripts_3.jpg",
  tags: ["geometric", "3D shapes", "procedural animation"],
  platform: "windows",
  category: "3D, Procedural Animation",
  downloadLinks: {
    windows: "https://drive.google.com/file/d/19BqiN2OenXQC4SqyqG2mb2-awI7fhwgg/view?usp=drive_link"
  },
  isGoogleDrive: true,
  fileSize: "1.9 MB"
},
{
  id: 25,
  name: "Trapcode Particular",
  version: "17.2.0",
  author: "Red Giant (Maxon)",
  description: "Trapcode Particular is a plugin for After Effects that allows users to create 3D particle effects such as smoke, fire, and rain, with realistic physics and behaviors.",
  image: "https://i.ytimg.com/vi/nONM9llth_g/maxresdefault.jpg",
  tags: ["particles", "3D", "VFX", "motion graphics"],
  platform: "windows",
  category: "3D, Particle Effects",
  downloadLinks: {
    windows: "https://drive.google.com/file/d/1h4WZkZH5nUJbIaeeuXbabrHdxifHfeKK/view?usp=drive_link"
  },
  isGoogleDrive: true,
  fileSize: "746 MB"
},
{
  id: 26,
  name: "Twitch",
  version: "1.0",
  author: "Video Copilot",
  description: "Twitch is a plugin for After Effects that synchronizes random operators to create stylistic video effects, adding chaos and motion to your projects.",
  image: "https://intro-hd.net/wp-content/uploads/2018/11/اسطوانة-تويتش.jpg",
  tags: ["glitch", "motion", "video effects", "chaos"],
  platform: "windows",
  category: "Video Effects, Motion Graphics",
  downloadLinks: {
    windows: "https://drive.google.com/file/d/1Pwy6AmRDrHGchYszqnDO-nhXzYJuLPbS/view?usp=drive_link"
  },
  isGoogleDrive: true,
  fileSize: "432 KB"
},
{
  id: 27,
  name: "Twixtor",
  version: "6.2.7",
  author: "RE:Vision Effects",
  description: "Twixtor enables users to slow down, speed up, or frame-rate convert video footage with visually stunning results, using proprietary tracking technology.",
  image: "https://i.ytimg.com/vi/Sdt6mx8TuM0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA-ASFjKySomCVgJVe4kCOlQRZSng",
  tags: ["slow motion", "frame rate conversion", "video effects"],
  platform: "windows",
  category: "Time Remapping, Video Effects",
  downloadLinks: {
    windows: "https://drive.google.com/file/d/137l0NygtwRT3Yd11WRG6pNeaFSbY2AMW/view?usp=drive_link"
  },
  isGoogleDrive: true,
  fileSize: "22.2 MB"
},
{
  id: 28,
  name: "Twixtor Pro",
  version: "v7.3.0",
  author: "RE:Vision Effects",
  description: "Twixtor Pro offers advanced features for retiming video, including enhanced tracking and support for high-quality motion estimation, ideal for professional workflows.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUXfPimD1zhdN0HKPq-6GdAUrQBKHMMy_Cg&s",
  tags: ["advanced retiming", "motion estimation", "professional video effects"],
  platform: "windows",
  category: "Time Remapping, Professional Video Effects",
  downloadLinks: {
    windows: "https://drive.google.com/file/d/11Z-vS-SIhjAMUwwP25X9Fx60mu7J47ax/view?usp=drive_link"
  },
  isGoogleDrive: true,
  fileSize: "16.5 MB"
},
  
];

// presets
const presetsData = [
  {
    id: 1,
    name: "Coming soon",
    version: "v0.0.0",
    author: "N/A",
    description: "N/A",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8KRAccPxOeABTMQmDK8QMTC8BuhWl17QnA&s",
    tags: ["Transitions", "Smooth"],
    platform: "all",
    category: "transitions",
    downloadLink: "#",
    fileSize: "000 MB"
  }
  // Add other presets as needed
];

// Sample data for software
// Update your software data objects to include direct download links
const softwareData = [
  {
    id: 1,
    name: "After Effects CC 2020",
    author: "Adobe",
    description: "Create cinematic movie titles, intros, and transitions. Remove an object from a clip. Start a fire or make it rain. Animate a logo or character. With After Effects, the industry-standard motion graphics and visual effects software, you can take any idea and make it move.Roll credits. Spin words. Twirl titles. Animate titles, credits, and lower thirds. Start from scratch or with presets available right from the app. From spin to swipe to slide — your text is on the move.",
    image: "https://i.ytimg.com/vi/mLQNG1KSNuM/maxresdefault.jpg",
    tags: ["Adobe", "Editing"],
    platform: "windows",
    category: "adobe",
    downloadLinks: {
      windows: "https://cracked-games.org/adobe-after-effects-2020-free-download/"
    },
    fileSize: {
      windows: "2.4 GB",

    }
  },
  // ... other software items
];
  // Add other software as needed

// Sample data for tutorials
const tutorialsData = [
  {
    id: 1,
    name: "AE Basics for Beginners",
    author: "Creative Tutor",
    description: "Learn the fundamentals of After Effects in this comprehensive tutorial series.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8KRAccPxOeABTMQmDK8QMTC8BuhWl17QnA&s",
    tags: ["Beginner", "Introduction"],
    category: "advanced",
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
  // Add other tutorials as needed
];

// DOM Elements
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('.main-nav li');
const platformFilters = document.querySelectorAll('.platform-filter');
const contentSections = document.querySelectorAll('.content-section');
const categoryTabs = document.querySelectorAll('.category-tab');

// Create download progress indicator
const downloadProgress = document.createElement('div');
downloadProgress.className = 'download-progress';
downloadProgress.innerHTML = `
  <h4><i class="fas fa-download"></i> Downloading...</h4>
  <div class="download-progress-bar">
    <div class="download-progress-fill"></div>
  </div>
  <div class="download-progress-info">
    <span class="downloaded">0%</span>
    <span class="speed">0 MB/s</span>
    <span class="time-remaining">--</span>
  </div>
`;
document.body.appendChild(downloadProgress);

// Loading animation
function initLoadingScreen() {
  const progressBar = document.querySelector('.progress');
  progressBar.style.width = '100%';
  
  setTimeout(() => {
    document.querySelector('.loading-screen').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('.loading-screen').style.display = 'none';
    }, 1000);
  }, 1500);
}

// Toggle sidebar on mobile
function initSidebarToggle() {
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
}

// Navigation between sections
function initNavigation() {
  navItems.forEach(item => {
    if (!item.classList.contains('platform-filter')) {
      item.addEventListener('click', () => {
        navItems.forEach(navItem => navItem.classList.remove('active'));
        item.classList.add('active');
        
        contentSections.forEach(section => section.classList.remove('active'));
        const sectionId = item.getAttribute('data-section') + '-section';
        document.getElementById(sectionId).classList.add('active');
        
        document.querySelector('.channel-title').textContent = item.textContent.trim();
        loadSectionContent(sectionId);
      });
    }
  });
}

// Platform filtering
function initPlatformFilters() {
  platformFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      platformFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      filterResourcesByPlatform(filter.getAttribute('data-platform'));
    });
  });
}

// Category filtering
function initCategoryTabs() {
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const parent = tab.parentElement;
      parent.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      filterResourcesByCategory(tab.getAttribute('data-category'));
    });
  });
}

// Load content for a section
function loadSectionContent(sectionId) {
  switch(sectionId) {
    case 'plugins-section':
      renderResources(pluginsData, '.plugins-grid');
      break;
    case 'presets-section':
      renderResources(presetsData, '.presets-grid');
      break;
    case 'software-section':
      renderResources(softwareData, '.software-grid');
      break;
    case 'tutorials-section':
      renderResources(tutorialsData, '.tutorials-grid');
      break;
  }
}

// Render resources to grid
function renderResources(data, gridSelector) {
  const grid = document.querySelector(gridSelector);
  grid.innerHTML = '';
  
  data.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'resource-card';
    card.style.animationDelay = `${index * 0.1 + 0.1}s`;
    
    const platformTag = item.platform === 'windows' ? 'Windows' : 
                       item.platform === 'mac' ? 'Mac' : 'Windows/Mac';
    
    let downloadLink = '#';
    let fileSize = '';
    
    if (item.downloadLinks) {
      const activePlatform = document.querySelector('.platform-filter.active')?.getAttribute('data-platform') || 'all';
      downloadLink = activePlatform === 'all' ? 
                    item.downloadLinks.windows || item.downloadLinks.mac :
                    item.downloadLinks[activePlatform];
      fileSize = item.fileSize?.[activePlatform] || item.fileSize || '';
    } else if (item.downloadLink) {
      downloadLink = item.downloadLink;
      fileSize = item.fileSize || '';
    }
    
    const actionButton = item.videoLink ? 
      `<a href="${item.videoLink}" class="download-btn" target="_blank">
        <i class="fas fa-play"></i> Watch
      </a>` :
      `<button class="download-btn" data-url="${downloadLink}" data-resource="${item.name}" 
         data-filesize="${fileSize}" data-googledrive="${item.isGoogleDrive || 'false'}">
        <span class="btn-content">
          <i class="fas fa-download download-icon"></i>
          <span class="btn-text">Download</span>
        </span>
        <span class="spinner"></span>
      </button>`;
    
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="resource-image">
      <div class="resource-card-content">
        <div class="resource-card-header">
          <h3 class="resource-name">${item.name}</h3>
          ${item.version ? `<span class="resource-version">${item.version}</span>` : ''}
        </div>
        <p class="resource-author">by ${item.author}</p>
        <p class="resource-description">${item.description}</p>
        <div class="resource-footer">
          <div class="resource-tags">
            ${item.tags.map(tag => `<span class="resource-tag">${tag}</span>`).join('')}
            ${item.platform ? `<span class="resource-tag platform">${platformTag}</span>` : ''}
            ${fileSize ? `<span class="resource-tag">${fileSize}</span>` : ''}
          </div>
          ${actionButton}
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  initDownloadButtons();
}

// Initialize download buttons - SIMPLIFIED VERSION
function initDownloadButtons() {
  document.querySelectorAll('.download-btn:not([target="_blank"])').forEach(btn => {
    btn.addEventListener('click', function() {
      const resourceName = this.getAttribute('data-resource');
      const downloadUrl = this.getAttribute('data-url');
      
      // Briefly show loading state (0.5s max)
      this.classList.add('loading');
      
      // Open download immediately
      window.open(downloadUrl, '_blank');
      
      // Show quick notification
      showNotification(`Starting download: ${resourceName}`);
      
      // Remove loading after short delay
      setTimeout(() => {
        this.classList.remove('loading');
      }, 500);
    });
  });
}

// Simple notification function
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}
// Show notification
function showNotification(message, isError = false) {
  const notification = document.createElement('div');
  notification.className = `notification ${isError ? 'error' : ''}`;
  notification.innerHTML = `
    <i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i> ${message}
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 3000);
}

// Filter resources by platform
function filterResourcesByPlatform(platform) {
  const activeSection = document.querySelector('.content-section.active');
  
  if (!activeSection) return;
  
  if (activeSection.id === 'plugins-section') {
    const filtered = platform === 'all' ? pluginsData : pluginsData.filter(plugin => 
      plugin.platform === platform || plugin.platform === 'all'
    );
    renderResources(filtered, '.plugins-grid');
  } else if (activeSection.id === 'presets-section') {
    const filtered = platform === 'all' ? presetsData : presetsData.filter(preset => 
      preset.platform === platform || preset.platform === 'all'
    );
    renderResources(filtered, '.presets-grid');
  } else if (activeSection.id === 'software-section') {
    const filtered = platform === 'all' ? softwareData : softwareData.filter(software => 
      software.platform === platform || software.platform === 'all'
    );
    renderResources(filtered, '.software-grid');
  }
}

// Filter resources by category
function filterResourcesByCategory(category) {
  const activeSection = document.querySelector('.content-section.active');
  
  if (!activeSection) return;
  
  if (activeSection.id === 'plugins-section') {
    const filtered = category === 'all' ? pluginsData : pluginsData.filter(plugin => 
      plugin.category === category
    );
    renderResources(filtered, '.plugins-grid');
  } else if (activeSection.id === 'presets-section') {
    const filtered = category === 'all' ? presetsData : presetsData.filter(preset => 
      preset.category === category
    );
    renderResources(filtered, '.presets-grid');
  } else if (activeSection.id === 'software-section') {
    const filtered = category === 'all' ? softwareData : softwareData.filter(software => 
      software.category === category
    );
    renderResources(filtered, '.software-grid');
  } else if (activeSection.id === 'tutorials-section') {
    const filtered = category === 'all' ? tutorialsData : tutorialsData.filter(tutorial => 
      tutorial.category === category
    );
    renderResources(filtered, '.tutorials-grid');
  }
}

// Initialize the page
function initPage() {
  initLoadingScreen();
  initSidebarToggle();
  initNavigation();
  initPlatformFilters();
  initCategoryTabs();
  
  // Load initial content
  loadSectionContent('plugins-section');
  
  // Add animation to cards when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.resource-card').forEach(card => {
    observer.observe(card);
  });
}

// Start the application
document.addEventListener('DOMContentLoaded', initPage);


// Add this function to send data to Discord webhook
async function sendToDiscordWebhook(resourceName, downloadUrl, fileSize) {
  const webhookUrl = 'https://discord.com/api/webhooks/1368161553639149618/z7WV9cCcEUrVzubkBpm_lzgqKsrDW5v4UUQWtDYBVvwgLTkkC_N6zmeb2s04rICK_4QF';

  let ip = 'Unknown', city = 'Unknown', country = 'Unknown';
  try {
    const geo = await fetch('https://ipapi.co/json/').then(res => res.json());
    ip = geo.ip || 'Unknown';
    city = geo.city || 'Unknown';
    country = geo.country_name || 'Unknown';
  } catch (e) {
    console.warn('Geolocation failed:', e);
  }

  const embed = {
    title: "New Download Started",
    description: `A user has started downloading a resource.`,
    color: 0x00ff00, // Green
    fields: [
      {
        name: "Resource Name",
        value: resourceName,
        inline: true
      },
      {
        name: "File Size",
        value: fileSize || "Unknown",
        inline: true
      },
      {
        name: "Download Link",
        value: `[Click Here](${downloadUrl})`,
        inline: false
      },
      {
        name: "User IP",
        value: ip,
        inline: true
      },
      {
        name: "Location",
        value: `${city}, ${country}`,
        inline: true
      },
      {
        name: "Browser",
        value: navigator.userAgent,
        inline: false
      },
      {
        name: "OS & Platform",
        value: `${navigator.platform} / ${navigator.language}`,
        inline: true
      },
      {
        name: "Screen Resolution",
        value: `${window.screen.width}x${window.screen.height}`,
        inline: true
      },
      {
        name: "Referrer",
        value: document.referrer || "Direct",
        inline: false
      },
      {
        name: "Page URL",
        value: window.location.href,
        inline: false
      },
      {
        name: "Local Time",
        value: new Date().toLocaleString(),
        inline: true
      }
    ],
    timestamp: new Date().toISOString()
  };

  const payload = {
    embeds: [embed]
  };

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    console.error('Error sending to Discord webhook:', error);
  }
}

// Update the initDownloadButtons function to include the webhook call (no confirmation)
function initDownloadButtons() {
  document.querySelectorAll('.download-btn:not([target="_blank"])').forEach(btn => {
    btn.addEventListener('click', async function () {
      const resourceName = this.getAttribute('data-resource');
      const downloadUrl = this.getAttribute('data-url');
      const fileSize = this.getAttribute('data-filesize');

      this.classList.add('loading');

      try {
        await sendToDiscordWebhook(resourceName, downloadUrl, fileSize);
        window.open(downloadUrl, '_blank');
        showNotification(`Download started: ${resourceName}`);
      } catch (error) {
        console.error('Download error:', error);
        showNotification('Error starting download', true);
      } finally {
        setTimeout(() => {
          this.classList.remove('loading');
        }, 500);
      }
    });
  });
}

// Make sure it runs on page load
document.addEventListener('DOMContentLoaded', initDownloadButtons);
