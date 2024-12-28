import React from "react";
import Blogcard from "./BlogCards";




export default function Mega() {

  
  const post = [
    {
      id: "1",
      title: "Mastering JavaScript: A Beginner's Guide",
      description: "This blog covers the basics of JavaScript and helps you get started with coding.",
      date: "2024-12-20",
      imageUrl: "../Images/blog1.png"
    },
    {
      id: "2",
      title: "Top 10 Web Development Trends in 2024",
      description: "Stay ahead of the curve with these emerging trends in web development.",
      date: "2024-12-15",
      imageUrl: "../Images/blog2.png"
    },
    {
      id: "3",
      title: "How to Create a Responsive Website Design",
      description: "Learn how to make your websites look great on any device with responsive design techniques.",
      date: "2024-12-10",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    {
      id: "4",
      title: "The Ultimate Guide to Blogging for Beginners",
      description: "Everything you need to know to start your blog and grow your audience.",
      date: "2024-12-05",
      imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
    },
    {
      id: "5",
      title: "Understanding CSS Grid: Layout Made Easy",
      description: "Simplify your web layouts with this in-depth guide to CSS Grid.",
      date: "2024-12-01",
      imageUrl: "../Images/blog3.png"
    },
    {
      id: "6",
      title: "A Beginner's Guide to SEO Optimization",
      description: "Improve your website's visibility with these simple SEO techniques.",
      date: "2024-11-28",
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },
    {
      id: "7",
      title: "Top 5 Tools for Web Developers in 2024",
      description: "Explore the most popular tools and frameworks for web development.",
      date: "2024-11-25",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      id: "8",
      title: "How to Build a Personal Portfolio Website",
      description: "Showcase your skills and projects with an eye-catching portfolio site.",
      date: "2024-11-20",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
    },
    {
      id: "9",
      title: "Demystifying JavaScript Frameworks",
      description: "Understand the differences between React, Angular, and Vue.js.",
      date: "2024-11-15",
      imageUrl: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
    },
    {
      id: "10",
      title: "Tips for Writing Cleaner Code",
      description: "Learn best practices for writing maintainable and readable code.",
      date: "2024-11-10",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      id: "11",
      title: "The Basics of API Development",
      description: "Learn how to create and integrate APIs for your applications.",
      date: "2024-11-05",
      imageUrl: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
    },
    {
      id: "12",
      title: "Exploring the Future of AI in Web Design",
      description: "Discover how AI is shaping the future of web design and development.",
      date: "2024-11-01",
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },
    {
      id: "13",
      title: "The Importance of Accessibility in Web Development",
      description: "Ensure your websites are accessible to everyone with these key tips.",
      date: "2024-10-28",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
    },
    {
      id: "14",
      title: "Understanding Version Control with Git",
      description: "Master the basics of Git for efficient version control in your projects.",
      date: "2024-10-25",
      imageUrl: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
    },
    {
      id: "15",
      title: "The Rise of Jamstack in Modern Web Development",
      description: "Learn why Jamstack is becoming a popular architecture for web developers.",
      date: "2024-10-20",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    }
  ];


  return (
    <div className="my-8">
      <h1 className="text-5xl font-bold text-center text-red-600 animate-color-change" >
        {" "}
        Expolring the Web</h1>
        {" "}
        

      <div className="grid grid-cols-3 mt-8 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {post.map((post, index) => (
          <div className="fade-in " key={post.id}>
            <div className="blog-card">
              <Blogcard post={post} isDarkBackground={index % 2 === 0} />
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}
