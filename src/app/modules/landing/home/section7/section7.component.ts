import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import EmblaCarousel, {EmblaCarouselType} from 'embla-carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

@Component({
    selector: 'app-section7',
    templateUrl: './section7.component.html',
    styleUrls: ['./section7.component.scss']
})
export class Section7Component implements AfterViewInit, OnDestroy {
    @ViewChild('viewport', {static: true}) emblaRef!: ElementRef<HTMLElement>;
    embla!: EmblaCarouselType;
    autoplayInterval: any;
    private currentScrollIndex = 0;
    images = [
        {
            text: `    He utilizado muchos softwares médicos durante mi
                                carrera, pero Dr.Linky me ayudó no solo al historial
                                médico de mis pacientes sino también a poder hacerles un
                                mucho mejor seguimiento y hacerles un mejor plan de
                                fidelización, ya que en el mundo actual de medicina
                                estética no solo basta con conseguir pacientes sino a
                                darles un buen seguimiento`,
            imageUrl: 'assets/images/alberto.jpg',
            background: 'assets/images/carousel1.png',
            colorText: 'white',
            nombre: 'Dr. Alberto Shinzato'
        },
        {
            text: `El panorama de los médicos que trabajamos de manera
            independiente sabemos que no sólo basta el conocimiento
            sino también una buena estrategia de marketing y
            segmentación el cual tiene integrada la plataforma de
            Dr.Link, lo que me ayudó a generar muchas más ventas y
            crecimiento`,
            imageUrl: 'assets/images/david.jpg',
            background: 'assets/images/carousel2.png',
            nombre: 'Dr. David Cerrón'
        },
        {
            text: `Es un software médico muy versátil además de tener
            diversas funcionalidades tanto en web como en app.
            Siempre tienen mejoras continuas e integradas con
            inteligencia artificial para agilizar nuestros procesos.`,
            imageUrl: 'assets/images/angela.jpg',
            background: 'assets/images/carousel3.png',
            nombre: 'Angela Podestá'
        },
        {
            text: `Dr.Link tiene una interfaz bastante amigable y fácil de
            entender, me brinda reportes y una segmentación avanzada
            de pacientes para poder ubicarlos fácilmente y saber al
            detalle su historial médico. La funcionalidad de la app
            es fascinante para el paciente de poder agendar, tener
            sus reportes y brindarles información sobre
            otros tratamientos.`,
            imageUrl: 'assets/images/vanesa.jpg',
            background: 'assets/images/carousel4.png',
            nombre: 'Vanessa Anco'
        },
        {
            text: `Tener una aplicación para nuestros pacientes es un
            herramienta muy poderosa para fidelizar a nuestros
            pacientes y llevar un mejor seguimiento de su historial
            médico, no he visto ningun otro software médico que
            integre tantas funcionalidades tan útiles para nuestra
            práctica médica`,
            imageUrl: 'assets/images/monica.jpg',
            background: 'assets/images/carousel5.png',
            nombre: 'Dra. Monica Caqui'
        },
        {
            text: `Tener una aplicación que lo integre todo en una sola
            plataforma es muy útil para mi práctica médica diaria,
            me ahorra mucho tiempo y automatiza procesos que antes
            me tomaban usar dos o tres aplicaciones para una misma
            tarea`,
            imageUrl: 'assets/images/leydi.jpg',
            background: 'assets/images/carousel6.png',
            nombre: 'Dra. Leydi Gil'
        },
        {
            text: `Es un software médico muy versátil además de tener
            diversas funcionalidades tanto en web como en app.
            Siempre tienen mejoras continuas e integradas con
            inteligencia artificial para agilizar nuestros procesos.`,
            imageUrl: 'assets/images/angela.jpg',
            background: 'assets/images/carousel7.png',
            nombre: 'Angela Podestá'
        },
        {
            text: `Dr.Link tiene una interfaz bastante amigable y fácil de
            entender, me brinda reportes y una segmentación avanzada
            de pacientes para poder ubicarlos fácilmente y saber al
            detalle su historial médico. La funcionalidad de la app
            es fascinante para el paciente de poder agendar, tener
            sus reportes y brindarles información sobre
            otros tratamientos.`,
            imageUrl: 'assets/images/vanesa.jpg',
            background: 'assets/images/carousel8.png',
            nombre: 'Vanessa Anco'
        },
    ];


    groupedImages: any[][] = [];

    ngOnInit() {
        this.groupImagesByScreen();
        window.addEventListener('resize', this.groupImagesByScreen.bind(this));
    }

    groupImagesByScreen() {
        const width = window.innerWidth;
        let itemsPerSlide = 4;

        if (width < 900) {
            itemsPerSlide = 1;
        } else if (width < 1024) {
            itemsPerSlide = 2;
        }

        this.groupedImages = [];
        for (let i = 0; i < this.images.length; i += itemsPerSlide) {
            this.groupedImages.push(this.images.slice(i, i + itemsPerSlide));
        }
    }

    ngAfterViewInit() {
        this.embla = EmblaCarousel(this.emblaRef.nativeElement, {
            loop: true,
            dragFree: true,
            align: 'start'
        }, [
            AutoScroll({
                speed: 1.8, // Puedes ajustar la velocidad aquí
                startDelay: 0,
                stopOnMouseEnter: false,
                stopOnInteraction: false
            })
        ]);
    }


    groupImages(groupSize: number) {
        for (let i = 0; i < this.images.length; i += groupSize) {
            this.groupedImages.push(this.images.slice(i, i + groupSize));
        }
    }

    ngOnDestroy() {
        this.embla?.destroy();
    }

    testimonials = [
        {text: "Testimonio 1", bgColor: "bg-blue-500"},
        {text: "Testimonio 2", bgColor: "bg-green-500"},
        {text: "Testimonio 3", bgColor: "bg-red-500"},
        {text: "Testimonio 4", bgColor: "bg-yellow-500"},
    ];
}
