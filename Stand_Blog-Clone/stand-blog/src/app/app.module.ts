import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './module/core/footer/footer.component';
import { CarouselComponent } from './module/home/carousel/carousel.component';
import { CarouselItemComponent } from './module/home/carousel-item/carousel-item.component';
import { TemplateBannerComponent } from './module/shared/template-banner/template-banner.component';
import { PostComponent } from './module/shared/post/post.component';
import { RecentPostComponent } from './module/shared/recent-post/recent-post.component';
import { CategoriesComponent } from './module/shared/categories/categories.component';
import { TagCloudComponent } from './module/shared/tag-cloud/tag-cloud.component';
import { PostSearchComponent } from './module/shared/post-search/post-search.component';
import { AboutUsDetailComponent } from './module/about-us/components/about-us-detail/about-us-detail.component';
import { AboutUsComponent } from './module/about-us/about-us/about-us.component';
import { BriefDescriptionComponent } from './module/about-us/components/brief-description/brief-description.component';
import { CommentsComponent } from './module/post-details/components/comments/comments.component';
import { YourCommentsComponent } from './module/post-details/components/your-comments/your-comments.component';
import { CommentComponent } from './module/post-details/components/comment/comment.component';
import { SendUsMessageComponent } from './module/contact-us/components/send-us-message/send-us-message.component';
import { ContactInfomationComponent } from './module/contact-us/components/contact-infomation/contact-infomation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CarouselItemComponent,
    TemplateBannerComponent,
    PostComponent,
    RecentPostComponent,
    CategoriesComponent,
    TagCloudComponent,
    PostSearchComponent,
    AboutUsDetailComponent,
    AboutUsComponent,
    BriefDescriptionComponent,
    CommentsComponent,
    YourCommentsComponent,
    CommentComponent,
    SendUsMessageComponent,
    ContactInfomationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
