import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  items: GalleryItem[];
  imageData = [
    {
      srcUrl: 'https://pixabay.com/get/eb30b20f29f1093ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg',
      previewUrl: 'https://pixabay.com/get/eb30b20f29f1093ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg'
    },
    {
      srcUrl: 'https://pixabay.com/get/ea34b1092af5023ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg',
      previewUrl: 'https://pixabay.com/get/ea34b1092af5023ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg'
    },
    {
      srcUrl: 'https://pixabay.com/get/eb3cb30c29fc073ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg',
      previewUrl: 'https://pixabay.com/get/eb3cb30c29fc073ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg'
    },
    {
      srcUrl: 'https://pixabay.com/get/eb30b20f29f1093ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg',
      previewUrl: 'https://pixabay.com/get/eb30b20f29f1093ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg'
    },
    {
      srcUrl: 'https://pixabay.com/get/eb32b80e21fc013ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg',
      previewUrl: 'https://pixabay.com/get/eb32b80e21fc013ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg'
    },
    {
      srcUrl: 'https://pixabay.com/get/eb30b20f29f1093ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg',
      previewUrl: 'https://pixabay.com/get/eb30b20f29f1093ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg'
    },
    {
      srcUrl: 'https://pixabay.com/get/ea34b1092af5023ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg',
      previewUrl: 'https://pixabay.com/get/ea34b1092af5023ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg'
    },
    {
      srcUrl: 'https://pixabay.com/get/eb3cb30c29fc073ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg',
      previewUrl: 'https://pixabay.com/get/eb3cb30c29fc073ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg'
    },
    {
      srcUrl: 'https://pixabay.com/get/eb30b20f29f1093ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg',
      previewUrl: 'https://pixabay.com/get/eb30b20f29f1093ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg'
    },
    {
      srcUrl: 'https://pixabay.com/get/eb32b80e21fc013ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg',
      previewUrl: 'https://pixabay.com/get/eb32b80e21fc013ed95c4518b7494096e271e0c818b4104896f8c07fa0e8_960.jpg'
    },
    // ... more items
  ];

  ngOnInit() {
    this.items = this.imageData.map(item => new ImageItem(item.srcUrl, item.previewUrl));
  }
}
