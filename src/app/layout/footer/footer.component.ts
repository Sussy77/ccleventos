import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FooterLinkComponent } from 'app/components/footer-link/footer-link.component';

@Component({
  selector: 'app-footer',
  imports: [FooterLinkComponent, NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  links = [
    {
      link: 'https://web.facebook.com/CamaradeLima?_rdc=1&amp;_rdr#',
      label: 'Facebook',
      className: 'fab fa-facebook-f',
    },
    {
      link: 'https://x.com/camaradelima',
      label: 'Instagram',
      className: 'fab fa-instagram',
    },
    {
      link: 'https://www.youtube.com/user/CamaraComercioLima',
      label: 'YouTube',
      className: 'fab fa-youtube',
    },
    {
      link: 'https://www.instagram.com/camaracomerciolima/',
      label: 'TikTok',
      className: '',
      // child: `<img
      //             style="background: #000; border-radius: 12px"
      //             src="assets/images/tiktok.svg"
      //         />`,
    },
    {
      link: 'https://x.com/camaradelima/',
      label: 'X',
      className: '',
      //   child: `<img
      //               style="background: #000; border-radius: 12px"
      //               src="assets/images/ex.svg"
      //           />`,
    },
    {
      link: 'https://www.instagram.com/camaracomerciolima/',
      label: 'TikTok',
      className: '',
    },
    {
      link: 'https://www.linkedin.com/authwall?trk=bf&amp;trkInfo=AQFooARdMry97wAAAZd5E0sIdDivFKklre4SEQO_GpRtOTZa-Gw2u_KYF8c3u9E0S19A53p_HuQpBJX0Nri1tB60Vj4_Y_P-YKbw7jcHMOqSts9XrqWfDZpzNZR6rNNHVIp7HTU=&amp;original_referer=&amp;sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fcamaradelima',
      label: 'LinkedIn',
      className: 'fab fa-linkedin-in',
    },
  ];
}
