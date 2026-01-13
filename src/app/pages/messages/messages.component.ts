import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.html',
  styleUrl: './messages.css'
})
export class MessagesComponent {
  conversations = [
    {
      id: 1,
      name: 'James Rodriguez',
      avatar: 'https://i.pravatar.cc/40?img=12',
      preview: 'Thanks coach! See you tomorrow.',
      time: '10:30 AM',
      status: 'Online',
      messages: [
        { from: 'me', text: "Hi James! Great performance in today's training session." },
        { from: 'them', text: "Thank you coach! I've been working on my finishing." },
        { from: 'me', text: "It shows! Keep up the excellent work. Don't forget tomorrow's tactical session at 2 PM." },
        { from: 'them', text: 'Thanks coach! See you tomorrow.' }
      ]
    },
    {
      id: 2,
      name: 'Elite Squad A',
      avatar: 'https://i.pravatar.cc/40?img=49',
      preview: 'Training starts at 9 AM sharp',
      time: '9:15 AM',
      status: 'Group',
      messages: [
        { from: 'me', text: 'Morning team. Remember the warm-up drills.' },
        { from: 'them', text: 'Copy coach! We will be on the pitch by 8:40.' },
        { from: 'me', text: 'Great. Hydrate and bring your bands.' }
      ]
    },
    {
      id: 3,
      name: 'Emma Thompson',
      avatar: 'https://i.pravatar.cc/40?img=56',
      preview: 'Can we schedule extra practice?',
      time: 'Yesterday',
      status: 'Online',
      messages: [
        { from: 'them', text: 'Can we schedule extra practice?' },
        { from: 'me', text: 'Sure, I can add a 30-minute slot after Thursday training.' },
        { from: 'them', text: 'That would be perfect. Thank you!' }
      ]
    },
    {
      id: 4,
      name: 'Youth Development',
      avatar: 'https://i.pravatar.cc/40?img=22',
      preview: 'Great session today everyone!',
      time: 'Yesterday',
      status: 'Group',
      messages: [
        { from: 'me', text: 'Great session today everyone!' },
        { from: 'them', text: 'Thanks coach!' },
        { from: 'them', text: 'Loved the finishing drill.' }
      ]
    },
    {
      id: 5,
      name: 'Marcus Chen',
      avatar: 'https://i.pravatar.cc/40?img=34',
      preview: 'Injury update: feeling much better',
      time: '2 days ago',
      status: 'Offline',
      messages: [
        { from: 'them', text: 'Injury update: feeling much better.' },
        { from: 'me', text: 'Good to hear. Keep doing the physio routine.' },
        { from: 'them', text: 'Will do, thanks!' }
      ]
    }
  ];

  selectedId = 1;

  get selectedConversation() {
    return this.conversations.find((item) => item.id === this.selectedId) ?? this.conversations[0];
  }

  selectConversation(id: number) {
    this.selectedId = id;
  }
}
