---
name: impeccable
description: Sử dụng khi người dùng muốn thiết kế, thiết kế lại, định hình, phê bình, kiểm tra, đánh bóng, làm rõ, tinh giản, tối ưu hóa, điều chỉnh, tạo chuyển động, tô màu, trích xuất hoặc cải thiện giao diện frontend. Bao gồm trang web, trang đích (landing page), bảng quản trị (dashboard), giao diện sản phẩm (product UI), khung ứng dụng (app shell), các thành phần (components), biểu mẫu (forms), thiết lập, màn hình chào đón (onboarding) và các trạng thái trống (empty states). Xử lý đánh giá UX, phân cấp trực quan, kiến trúc thông tin, tải nhận thức, khả năng tiếp cận, hiệu năng, hành vi responsive, chủ đề (theme), các phản thiết kế (anti-patterns), typography, phông chữ, khoảng cách, bố cục, căn lề, màu sắc, chuyển động, vi tương tác (micro-interactions), nội dung sao chép UX, các trạng thái lỗi, trường hợp biên, quốc tế hóa (i18n), và các hệ thống thiết kế hoặc mã định danh tái sử dụng. Cũng sử dụng cho các thiết kế mờ nhạt cần trở nên táo bạo hơn hoặc thú vị hơn, các thiết kế quá sặc sỡ cần trở nên dịu hơn, các tương tác trực tiếp trên trình duyệt với các phần tử UI, hoặc các hiệu ứng thị giác tham vọng cần mang lại cảm giác kỹ thuật phi thường. Không dành cho các tác vụ chỉ liên quan đến backend hoặc phi UI.
version: 3.9.1
---

Thiết kế và lặp lại các giao diện frontend cấp sản xuất. Mã thực sự hoạt động, các lựa chọn thiết kế rõ ràng, kỹ nghệ đặc sắc.

## Thiết lập (Setup)

Bạn PHẢI thực hiện các bước này trước khi tiếp tục:

1. Chạy `node .gemini/skills/impeccable/scripts/context.mjs` một lần mỗi phiên làm việc; nếu môi trường chạy hiển thị thư mục gốc được tải của kỹ năng này, hãy chạy `node <skill-base-dir>/scripts/context.mjs` thay thế. Giữ thư mục làm việc (cwd/workdir) tại dự án của người dùng, không phải thư mục kỹ năng. Nếu yêu cầu đặt tên hoặc ám chỉ một tệp, route hoặc ứng dụng bên trong một monorepo, hãy tự suy luận đường dẫn cụ thể và nối thêm `--target <path>` vào cùng lệnh đó. Nếu bạn đã thấy đầu ra của nó trong cuộc hội thoại này, không chạy lại. Script sẽ in ra tệp PRODUCT.md (và DESIGN.md nếu có) của dự án dưới dạng khối markdown, hoặc thông báo rằng nó bị thiếu. Hãy tuân thủ bất kỳ điều gì nó in ra. **Nếu nó báo cáo `NO_PRODUCT_MD`:** hãy chuyển hướng sang `reference/init.md` trước tiên khi người dùng gọi lệnh `init`, `teach`, `craft`, hoặc `shape`, hoặc khi cách diễn đạt của họ ánh xạ rõ ràng tới một trong những quy trình xây dựng từ đầu đó (ví dụ: "xây dựng/tạo/làm một trang đích", "thiết kế một ứng dụng mới", hoặc "định hình một tính năng"). Việc thu thập bối cảnh sản phẩm là điểm cốt lõi của các quy trình đó. Đối với bất kỳ lệnh nào khác, như một yêu cầu đánh giá / tinh chỉnh / nâng cao / sửa lỗi / lặp lại có phạm vi đối với mã hiện có, **không** chuyển hướng sang init. Mã hiện tại chính là bối cảnh: tiếp tục với lệnh được yêu cầu, suy luận thanh đăng ký từ bề mặt đang được tập trung (bước 4), và gợi ý `/impeccable init` một lần như một đề xuất người dùng có thể thực hiện sau. Việc thiếu PRODUCT.md không bao giờ được chặn một yêu cầu có phạm vi. Nếu đầu ra kết thúc bằng một chỉ thị `UPDATE_AVAILABLE`, hãy làm theo nó (hỏi người dùng một lần về việc cập nhật, sau đó tiếp tục). Nó không bao giờ chặn tác vụ hiện tại.
2. Nếu người dùng gọi một lệnh phụ (`craft`, `shape`, `audit`, `polish`, ...), bạn PHẢI đọc tài liệu tham chiếu của lệnh đó tiếp theo: **`reference/<lệnh>.md`, hoặc biến thể gốc từ bảng Lệnh** (ví dụ: `reference/audit.native.md`) **khi nền tảng dự án là gốc (native)** (`ios` / `android` / `adaptive`, theo chỉ thị của `context.mjs`). Chỉ đọc một tệp, không đọc cả hai. Đây là bước bắt buộc. Tài liệu tham chiếu định nghĩa quy trình của lệnh; nếu không có nó bạn sẽ bỏ qua các bước mà người dùng mong đợi.
3. Làm quen với bất kỳ hệ thống thiết kế, quy ước và thành phần hiện có nào trong mã nguồn. Đọc ít nhất một tệp dự án (CSS / tokens / theme / một thành phần hoặc trang đại diện). **Bắt buộc ngay cả khi bạn đã tải tài liệu tham chiếu lệnh phụ ở bước 2.** Đừng phát minh lại bánh xe; hãy sử dụng những gì đã có khi nó hoạt động tốt, chỉ phát triển thêm khi mang lại lợi ích lớn cho UX.
4. Đọc tài liệu tham chiếu thanh đăng ký (register reference) phù hợp. **Đây là bước bắt buộc; bỏ qua nó sẽ tạo ra đầu ra chung chung.** Nếu dự án là marketing, trang đích, chiến dịch, nội dung dài, hoặc portfolio (thiết kế CHÍNH LÀ sản phẩm), hãy đọc `reference/brand.md`. Nếu đó là UI ứng dụng, bảng quản trị, dashboard hoặc một công cụ (thiết kế PHỤC VỤ sản phẩm), hãy đọc `reference/product.md`. Chọn bằng kết quả khớp đầu tiên: (1) gợi ý tác vụ ("landing page" so với "dashboard"); (2) bề mặt đang được tập trung (trang, tệp hoặc route đang được xử lý); (3) trường `register` trong PRODUCT.md.
5. **Nếu `## Platform` của PRODUCT.md là `ios` hoặc `android`**, hãy đọc thêm `reference/<platform>.md` (các quy ước HIG / Material 3). `adaptive` (đa nền tảng, xuất bản cả hai) đọc cả hai tệp. Nếu là `web`, bị thiếu, hoặc không nhận diện được: không cần đọc thêm gì. `context.mjs` sẽ in ra chỉ thị khi có chỉ thị phù hợp.
6. **Nếu dự án hoàn toàn mới (không tìm thấy CSS tokens / theme / màu sắc thương hiệu đã cam kết ở bước 3)**, hãy chạy `node .gemini/skills/impeccable/scripts/palette.mjs` để nhận màu thương hiệu hạt giống và hướng dẫn cấu trúc. Đây là mỏ neo cho màu thương hiệu chính của bạn. Xây dựng phần còn lại của bảng màu (nền, bề mặt, mực, điểm nhấn, bị tắt) xung quanh nó theo hướng dẫn của script. Sử dụng OKLCH xuyên suốt. **Chỉ bỏ qua bước này nếu bước 3 tìm thấy các màu thương hiệu đã cam kết trong các token hiện có; trong trường hợp đó việc bảo tồn bản sắc thương hiệu được ưu tiên.**

## Hướng dẫn thiết kế (Design guidance)

Tạo ra mã nguồn sẵn sàng xuất bản, cấp sản xuất, không phải các bản mẫu thử nghiệm hay điểm bắt đầu. Không đi tắt trừ khi người dùng yêu cầu (khi nghi ngờ, hãy hỏi). Không dừng lại cho đến khi đạt được một triển khai hoàn chỉnh (đẹp, responsive, nhanh, chính xác, không lỗi, đúng thương hiệu). Bạn phải cực kỳ nghiêm túc với chi tiết: mỗi trang, phần hoặc thành phần được tạo ra đều phải được kiểm thử chiến đấu bằng các công cụ có sẵn (chụp ảnh màn hình trình duyệt, sử dụng máy tính, v.v.). Gemini có khả năng thực hiện những công việc phi thường. Đừng ngần ngại.

### Quy tắc chung (General rules)

#### Màu sắc (Color)

- **Xác minh độ tương phản.** Văn bản nội dung (body text) phải đạt tỷ lệ tương phản ≥4.5:1 so với nền của nó; văn bản lớn (≥18px hoặc in đậm ≥14px) cần ≥3:1. Văn bản gợi ý (placeholder) cần đạt cùng tỷ lệ 4.5:1, không sử dụng màu xám mờ mặc định. Lỗi phổ biến nhất: văn bản nội dung màu xám mờ trên nền gần như trắng có pha màu. Nếu độ tương phản ở mức mấp mé, hãy tăng màu chữ về phía đầu mực của dải màu; màu xám nhạt "để tạo sự thanh lịch" là lý do lớn nhất khiến các thiết kế AI trở nên khó đọc.
- Chữ màu xám trên nền có màu trông sẽ bị bạc màu. Hãy sử dụng tông màu tối hơn của chính màu nền đó, hoặc sử dụng độ trong suốt (opacity) của màu chữ.

#### Nghệ thuật chữ (Typography)

- Giới hạn độ dài dòng văn bản nội dung ở mức 65–75 ký tự (ch).
- Không kết hợp các phông chữ tương tự nhau nhưng không giống hệt nhau (hai phông sans-serif hình học, hai phông sans-serif nhân văn). Hãy kết hợp trên một trục tương phản (serif + sans, hình học + nhân văn) hoặc sử dụng một họ phông chữ với nhiều độ đậm nhạt khác nhau.
- Giới hạn tiêu đề Hero / hiển thị: `clamp()` tối đa ≤ 6rem (~96px). Vượt quá mức đó trang web sẽ giống như đang hét lên chứ không phải thiết kế.
- Khoảng cách chữ tiêu đề hiển thị tối thiểu: ≥ -0.04em. Tỷ lệ chặt hơn sẽ khiến các chữ cái chạm vào nhau; gây cảm giác chật chội, không phải "được thiết kế".
- Sử dụng `text-wrap: balance` cho h1–h3 để có độ dài các dòng đều nhau; sử dụng `text-wrap: pretty` cho các đoạn văn dài để giảm thiểu các từ đơn lẻ ở dòng cuối (orphans).

#### Bố cục (Layout)

- Thay đổi khoảng cách để tạo nhịp điệu trực quan.
- Thẻ bài (Cards) là câu trả lời lười biếng. Chỉ sử dụng chúng khi chúng thực sự là giải pháp hiển thị tốt nhất. Các thẻ bài lồng nhau luôn luôn sai.
- Sử dụng Flexbox cho bố cục 1 chiều (1D), Grid cho bố cục 2 chiều (2D). Đừng mặc định dùng Grid khi chỉ cần `flex-wrap` là đủ đơn giản.
- Đối với các lưới responsive không dùng breakpoint: `repeat(auto-fit, minmax(280px, 1fr))`.
- Xây dựng một thang đo z-index có ý nghĩa ngữ nghĩa (dropdown → sticky → modal-backdrop → modal → toast → tooltip). Không bao giờ sử dụng các giá trị tùy tiện như 999 hoặc 9999.

#### Chuyển động (Motion)

- Chuyển động phải có chủ ý và không được là một ý nghĩ sau cùng. Hãy coi nó như một phần của quá trình xây dựng.
- Không tạo chuyển động cho các thuộc tính bố cục CSS trừ khi thực sự cần thiết.
- Giảm tốc độ (ease out) bằng các đường cong lũy thừa (ease-out-quart / quint / expo). Không có hiệu ứng nảy (bounce), không có hiệu ứng đàn hồi (elastic).
- Sử dụng các thư viện cho các nhu cầu chuyển động nâng cao hơn (ví dụ: motion, gsap, anime.js, lenis, v.v.).
- Giảm chuyển động (reduced motion) là bắt buộc. Mỗi hiệu ứng chuyển động đều cần một phương án thay thế `@media (prefers-reduced-motion: reduce)`: thông thường là hiệu ứng mờ dần (crossfade) hoặc chuyển cảnh tức thì.
- Việc tạo hiệu ứng so le (staggering) cho các mục trong một danh sách là hợp lệ. Vấn đề nằm ở phản xạ đồng nhất (áp dụng một hiệu ứng xuất hiện giống hệt nhau cho mọi phân đoạn), chứ không phải bản thân chuyển động; mỗi hiệu ứng xuất hiện phải phù hợp với những gì nó hiển thị. Việc loại bỏ phản xạ đồng nhất không bao giờ là lý do để xuất bản một trang hoàn toàn không có chuyển động.
- Các chuyển động xuất hiện phải nâng cao một mặc định đã hiển thị sẵn. Đừng chặn khả năng hiển thị nội dung vào một hiệu ứng chuyển cảnh được kích hoạt bằng class; các hiệu ứng chuyển cảnh sẽ tạm dừng trên các tab bị ẩn và các công cụ render không đầu (headless renderers), do đó hiệu ứng xuất hiện sẽ không bao giờ kích hoạt và phân đoạn sẽ bị trống.
- Các chất liệu chuyển động cao cấp không chỉ là dịch chuyển (transform) hay độ mờ (opacity). Các hiệu ứng mờ (blur), lọc nền (backdrop-filter), clip-path, mask, và bóng đổ/hào quang (shadow/glow) là một phần của bảng công cụ khi chúng cải thiện hiệu ứng một cách rõ rệt và giữ được sự mượt mà.

#### Tương tác (Interaction)

- Các dropdown được hiển thị với `position: absolute` bên trong một container có `overflow: hidden` hoặc `overflow: auto` sẽ bị cắt đứt. Hãy sử dụng API native `<dialog>` / popover, `position: fixed`, hoặc một cổng kết nối (portal) để thoát khỏi ngữ cảnh xếp chồng (stacking context).

**Lỗi cụ thể của Gemini: cấm hoàn toàn.** Không bao giờ tạo hiệu ứng chuyển động cho các phần tử `<img>` khi di chuột qua (hover). Điều này bao gồm bất kỳ thuộc tính `transform` nào trên `:hover` của ảnh, VÀ các mẫu `.group:hover .group-hover\:scale` / `.group:hover .group-hover\:rotate` / `.group:hover .group-hover\:translate` từ Tailwind tạo hiệu ứng cho ảnh con thông qua việc hover phần tử cha. Đây là dấu hiệu chuyển động phổ biến nhất của bạn; nó không thêm thông tin nào (ảnh không phải là mục tiêu hành động) và mang lại cảm giác "AI tạo chuyển động chỉ vì nó có thể". Nếu một thẻ cần phản hồi hover, hãy tạo hiệu ứng cho nền, viền hoặc bóng của thẻ đó. Không bao giờ làm trên ảnh, không bao giờ thông qua phần tử cha của ảnh.

### Chỉ dành cho các dự án mới (khi chưa có sản phẩm cũ)

#### Màu sắc & Chủ đề (Color & Theme)

- Sử dụng OKLCH.
- **Màu nền kem / cát / be (cream / sand / beige) là mặc định quá bão hòa của AI năm 2026.** Toàn bộ dải màu trung tính ấm (OKLCH L 0.84-0.97, C < 0.06, hue 40-100) đều mang lại cảm giác kem/cát/giấy/da dê bất kể bạn gọi nó là gì. Các tên token như `--paper`, `--cream`, `--sand`, `--bone`, `--flour`, `--linen`, `--parchment`, `--wheat`, `--biscuit`, `--ivory` đều là những dấu hiệu tự tố cáo. Nếu yêu cầu là "ấm áp, truyền thống, gia đình-ven biển Ý" hoặc "ấm áp kiểu tạp chí" hoặc "tinh giản kiểu biên tập", ĐỪNG chuyển nó thành một màu nền gần như trắng pha ấm; đó là nước đi của AI. Hãy chọn: (a) một màu thương hiệu bão hòa làm nền chính (terracotta, oxblood, deep ochre, gần như đen), (b) một màu thực sự lệch trắng ở độ bão hòa (chroma) bằng 0 (hoặc chroma hướng về chính màu của thương hiệu, không hướng về màu ấm mặc định), hoặc (c) một màu trung tính tông trung bình tối hơn mang rõ sắc thái thương hiệu. Sự "ấm áp" trong thương hiệu được truyền tải bởi các điểm nhấn + typography + hình ảnh, không phải bởi màu nền chính.
- Màu trung tính pha màu (tinted neutrals): thêm 0.005–0.015 chroma hướng về màu của thương hiệu. Đừng mặc định pha màu ấm hoặc mát "vì thương hiệu mang lại cảm giác đó"; đó là nước đi đơn điệu xuyên dự án.
- Khi chọn một chủ đề (theme): Tối so với sáng không bao giờ là mặc định. Không chọn tối "vì các công cụ trông ngầu khi tối." Không chọn sáng "để cho an toàn." Trước khi chọn, hãy viết một câu mô tả bối cảnh vật lý: ai sử dụng cái này, ở đâu, dưới ánh sáng môi trường nào, trong tâm trạng gì. Nếu câu đó không bắt buộc ra câu trả lời, tức là nó chưa đủ cụ thể. Hãy thêm chi tiết cho đến khi nó làm được điều đó.
- Chọn một **chiến lược màu sắc** trước khi chọn màu. Bốn bước trên trục cam kết:
  - **Tinh giảm (Restrained)**: các màu trung tính pha màu + một màu nhấn ≤10%. Mặc định cho sản phẩm; tối giản cho thương hiệu.
  - **Cam kết (Committed)**: một màu bão hòa chiếm 30–60% bề mặt. Mặc định thương hiệu cho các trang hướng tới bản sắc.
  - **Đầy đủ bảng màu (Full palette)**: 3–4 vai trò được đặt tên, mỗi vai trò được sử dụng một cách có chủ ý. Chiến dịch thương hiệu; trực quan hóa dữ liệu sản phẩm.
  - **Ngập tràn (Drenched)**: bề mặt CHÍNH LÀ màu sắc. Các phần hero của thương hiệu, các trang chiến dịch.

### Các lệnh cấm tuyệt đối (Absolute bans)

Khớp và từ chối. Nếu bạn chuẩn bị viết bất kỳ thứ nào trong số này, hãy viết lại phần tử đó với cấu trúc khác.

- **Đường viền sọc bên (Side-stripe borders).** Các đường viền `border-left` hoặc `border-right` lớn hơn 1px làm điểm nhấn màu sắc trên các thẻ bài, mục danh sách, phần chú thích (callouts) hoặc cảnh báo (alerts). Không bao giờ là thiết kế có chủ ý. Hãy viết lại bằng đường viền đầy đủ, tông nền nhạt, các con số/icon dẫn đầu, hoặc không dùng gì cả.
- **Văn bản dải màu (Gradient text).** Thuộc tính `background-clip: text` kết hợp với nền dải màu (gradient background). Mang tính trang trí, không bao giờ có ý nghĩa thực tế. Hãy sử dụng một màu đặc duy nhất. Nhấn mạnh thông qua độ đậm (weight) hoặc kích thước (size).
- **Glassmorphism làm mặc định.** Các hiệu ứng mờ (blurs) và thẻ kính được sử dụng một cách trang trí. Rất hiếm và phải có mục đích rõ ràng, nếu không hãy bỏ qua.
- **Mẫu hero chỉ số (The hero-metric template).** Số lớn, nhãn nhỏ, số liệu hỗ trợ, điểm nhấn dải màu. Rập khuôn của SaaS.
- **Các lưới thẻ bài giống hệt nhau.** Các thẻ bài cùng kích thước với icon + tiêu đề + văn bản, lặp lại vô tận.
- **Tiêu đề phụ chữ in hoa nhỏ có khoảng cách rộng phía trên mỗi phân đoạn.** Phần tiêu đề phụ kiểu năm 2023 (văn bản nhỏ in hoa toàn bộ với tracking rộng, dạng "ABOUT" "PROCESS" "PRICING" phía trên mỗi tiêu đề chính) hiện là khung giàn giáo AI bão hòa; nó xuất hiện trên 55-95% số lần tạo ra bất kể yêu cầu là gì, đó chính là định nghĩa của một dấu hiệu AI. Một tiêu đề phụ được đặt tên như một hệ thống thương hiệu có chủ ý là phong cách; một tiêu đề phụ trên mọi phân đoạn là ngữ pháp AI. Hãy chọn một nhịp điệu khác.
- **Các ký hiệu phân đoạn được đánh số làm khung mặc định (01 / 02 / 03).** Đặt `01 · About / 02 · Process / 03 · Pricing` phía trên mỗi phân đoạn là biến thể của tiêu đề phụ đi sâu hơn một cấp: sử dụng nó vì "các trang đích thường làm vậy" và bạn đang dựng khung theo phản xạ. Các con số chỉ xứng đáng có vị trí khi phân đoạn thực sự LÀ một trình tự (một quy trình 3 bước thực tế, một luồng có thứ tự, một dòng thời gian) và thứ tự đó mang lại thông tin người đọc cần. Một chuỗi đánh số có chủ ý trên một trang là phong cách; các con số phụ trên mọi phân đoạn trên toàn trang web là ngữ pháp AI.
- **Văn bản tràn ra ngoài container của nó.** Các từ tiêu đề dài cộng với tỷ lệ clamp lớn cộng với các lưới hẹp gây ra hiện tượng tràn tiêu đề trên máy tính bảng/điện thoại di động. Kiểm thử nội dung tiêu đề ở mọi breakpoint; nếu nó tràn ra ngoài, hãy giảm clamp tối đa hoặc viết lại nội dung. Viewport chính là một phần của thiết kế.

### Bài kiểm tra rác thải AI (The AI slop test)

Nếu ai đó nhìn vào giao diện này và có thể nói "AI đã làm ra cái đó" mà không nghi ngờ gì, thì thiết kế đó đã thất bại. Thất bại xuyên thanh đăng ký là các lệnh cấm tuyệt đối ở trên. Các thất bại cụ thể theo thanh đăng ký nằm trong từng tài liệu tham chiếu.

**Kiểm tra phản xạ danh mục (Category-reflex check).** Chạy ở hai cấp độ; cấp độ thứ hai sẽ bắt được những gì cấp độ thứ nhất bỏ qua.

- **Cấp độ một:** nếu ai đó có thể đoán được chủ đề + bảng màu chỉ dựa vào danh mục sản phẩm, đó là phản xạ dữ liệu đào tạo cấp độ một. Hãy chỉnh sửa lại câu mô tả bối cảnh và chiến lược màu sắc cho đến khi câu trả lời không còn hiển nhiên từ lĩnh vực đó nữa.
- **Cấp độ hai:** nếu ai đó có thể đoán được họ thẩm mỹ từ danh mục cộng với các phản tham chiếu ("công cụ quy trình làm việc AI không phải màu kem SaaS → phong cách typographic biên tập", "fintech không phải màu navy và vàng → chế độ tối tối giản kiểu terminal"), đó là cái bẫy sâu hơn một cấp. Phản xạ thứ nhất đã tránh được; phản xạ thứ hai thì chưa. Hãy chỉnh sửa cho đến khi cả hai câu trả lời đều không rõ ràng. Danh sách [các hướng thẩm mỹ từ chối theo phản xạ] trong tài liệu tham chiếu đăng ký thương hiệu sẽ bắt được các họ thẩm mỹ hiện đang bão hòa.

## Các lệnh (Commands)

| Lệnh | Danh mục | Mô tả | Tài liệu tham chiếu |
|---|---|---|---|
| `craft [tính năng]` | Xây dựng | Định hình, sau đó xây dựng tính năng từ đầu đến cuối | [reference/craft.md](reference/craft.md) |
| `shape [tính năng]` | Xây dựng | Lập kế hoạch UX/UI trước khi viết mã nguồn | [reference/shape.md](reference/shape.md) |
| `init` | Xây dựng | Thiết lập bối cảnh dự án: PRODUCT.md, DESIGN.md, cấu hình trực tiếp, các bước tiếp theo | [reference/init.md](reference/init.md) |
| `document` | Xây dựng | Tạo DESIGN.md từ mã nguồn hiện có của dự án | [reference/document.md](reference/document.md) |
| `extract [mục tiêu]` | Xây dựng | Kéo các token và thành phần tái sử dụng vào hệ thống thiết kế | [reference/extract.md](reference/extract.md) |
| `critique [mục tiêu]` | Đánh giá | Đánh giá thiết kế UX với tính điểm heuristic | [reference/critique.md](reference/critique.md) |
| `audit [mục tiêu]` | Đánh giá | Kiểm tra chất lượng kỹ thuật (khả năng tiếp cận, hiệu năng, responsive) | [reference/audit.md](reference/audit.md) · native: [reference/audit.native.md](reference/audit.native.md) |
| `polish [mục tiêu]` | Tinh chỉnh | Lượt kiểm tra chất lượng cuối cùng trước khi xuất bản | [reference/polish.md](reference/polish.md) |
| `bolder [mục tiêu]` | Tinh chỉnh | Khuếch đại các thiết kế quá an toàn hoặc mờ nhạt | [reference/bolder.md](reference/bolder.md) |
| `quieter [mục tiêu]` | Tinh chỉnh | Làm dịu các thiết kế quá sặc sỡ hoặc kích thích quá mức | [reference/quieter.md](reference/quieter.md) |
| `distill [mục tiêu]` | Tinh chỉnh | Tinh giản về bản chất, loại bỏ sự phức tạp | [reference/distill.md](reference/distill.md) |
| `harden [mục tiêu]` | Tinh chỉnh | Sẵn sàng sản xuất: xử lý lỗi, quốc tế hóa, các trường hợp biên | [reference/harden.md](reference/harden.md) |
| `onboard [mục tiêu]` | Tinh chỉnh | Thiết kế luồng trải nghiệm đầu tiên, các trạng thái trống, kích hoạt | [reference/onboard.md](reference/onboard.md) |
| `animate [mục tiêu]` | Nâng cao | Thêm các hiệu ứng chuyển động và hoạt họa có chủ đích | [reference/animate.md](reference/animate.md) |
| `colorize [mục tiêu]` | Nâng cao | Thêm màu sắc chiến lược cho các giao diện đơn sắc | [reference/colorize.md](reference/colorize.md) |
| `typeset [mục tiêu]` | Nâng cao | Cải thiện phân cấp typography và phông chữ | [reference/typeset.md](reference/typeset.md) |
| `layout [mục tiêu]` | Nâng cao | Sửa khoảng cách, nhịp điệu và phân cấp trực quan | [reference/layout.md](reference/layout.md) |
| `delight [mục tiêu]` | Nâng cao | Thêm cá tính và các điểm chạm đáng nhớ | [reference/delight.md](reference/delight.md) |
| `overdrive [mục tiêu]` | Nâng cao | Vượt qua các giới hạn quy ước thông thường | [reference/overdrive.md](reference/overdrive.md) |
| `clarify [mục tiêu]` | Sửa lỗi | Cải thiện nội dung UX, các nhãn và thông báo lỗi | [reference/clarify.md](reference/clarify.md) |
| `adapt [mục tiêu]` | Sửa lỗi | Thích ứng cho các thiết bị và kích thước màn hình khác nhau | [reference/adapt.md](reference/adapt.md) · native: [reference/adapt.native.md](reference/adapt.native.md) |
| `optimize [mục tiêu]` | Sửa lỗi | Chẩn đoán và khắc phục hiệu năng giao diện | [reference/optimize.md](reference/optimize.md) |
| `live` | Lặp lại | Chế độ biến thể trực quan: chọn phần tử trên trình duyệt, tạo các phương án thay thế | [reference/live.md](reference/live.md) |

Cộng với ba lệnh quản lý: `pin <lệnh>`, `unpin <lệnh>`, và `hooks <on|off|status|...>`, chi tiết bên dưới.

### Quy tắc định tuyến (Routing rules)

1. **Không có đối số**: người dùng đang hỏi "tôi nên làm gì?". Hãy làm cho menu nhận biết bối cảnh thay vì tĩnh. Thiết lập đã chạy `context.mjs`; nếu nó báo cáo `NO_PRODUCT_MD` tức là dự án chưa có bối cảnh được thu thập, vì vậy hãy dẫn đầu menu bằng `/impeccable init` như khuyến nghị hàng đầu (một dòng giải thích lý do) và vẫn hiển thị phần còn lại bên dưới; không tự động chuyển hướng sang init. Nếu không, chạy `node .gemini/skills/impeccable/scripts/context-signals.mjs` một lần và đọc tệp JSON của nó, sau đó dẫn đầu bằng **2-3 lệnh tiếp theo có giá trị cao nhất**, mỗi lệnh có một dòng lý do được lấy từ các tín hiệu, tiếp theo là menu đầy đủ (bảng ở trên, được nhóm theo danh mục). **Không bao giờ tự động chạy một lệnh; khuyến nghị là một gợi ý cần người dùng xác nhận.**

   Lập luận dựa trên các tín hiệu; không có điểm số bắt buộc phải tuân theo:
   - `setup.hasDesign` là false trong khi `setup.hasCode` là true → `document` (thu thập hệ thống trực quan).
   - `critique.latest` là `null` → dự án chưa từng được critique; đối với một dự án đã thiết lập với một bề mặt thực tế, gợi ý `/impeccable critique <surface>` là một mặc định mạnh mẽ.
   - `critique.latest` với `score` thấp hoặc `p0` / `p1` khác không → `polish` (nó đọc ảnh chụp nhanh đó làm backlog của nó), hoặc chạy lại `critique` nếu ảnh chụp nhanh có vẻ lỗi thời.
   - `git.changedFiles` trỏ vào một bề mặt → giới hạn phạm vi `audit` hoặc `polish` cụ thể cho các tệp đó, đặt tên cho chúng.
   - `devServer.running` là true → lệnh `live` khả dụng để lặp lại trong trình duyệt; nếu là false, không dẫn đầu bằng `live`. **Lệnh `live` và công cụ `detect.mjs` đi kèm chỉ dành cho web.** Nếu `setup.platform` là `ios`, `android`, hoặc `adaptive`, không dẫn đầu bằng cả hai; lớp phủ trình duyệt và công cụ quy tắc HTML không áp dụng cho mã nguồn ứng dụng gốc.
   - Nếu không, hãy nhóm theo ý định chính xác như bước "Khuyến nghị các điểm bắt đầu" của lệnh init thực hiện (xây dựng mới / cải thiện những gì đã có / lặp lại trực quan), phù hợp với `setup.register`.

   **Nếu `scan.targets` không trống và `setup.platform` không phải là `ios`/`android`/`adaptive`, hãy chạy `node .gemini/skills/impeccable/scripts/detect.mjs --json <scan.targets kết hợp bằng dấu cách>` một lần** (công cụ phát hiện đi kèm trên các tệp cục bộ: không mạng, không npx; nó đọc HTML/CSS, vì vậy hãy bỏ qua cho các dự án gốc). Biến `scan.via` cho biết chúng là gì: `git-changes` (các tệp đánh dấu/style trong cây làm việc chưa sạch của bạn, bộ tệp liên quan nhất), `source-dir` (ví dụ: `src`, `app`), `html`, hoặc `root`. Đưa các kết quả phát hiện vào các lựa chọn của bạn: nhiều kết quả về chất lượng / độ tương phản → `audit` hoặc `polish`; một nhóm phản thiết kế cụ thể → lệnh phù hợp (văn bản dải màu hoặc tiêu đề phụ → `quieter` / `typeset`, bảng màu phẳng hoặc xám → `colorize`, v.v.). Đó là một tín hiệu thực tế, hiện tại, tốt hơn là đoán mò. Nếu lệnh phát hiện lỗi hoặc cây thư mục lớn và chậm, hãy bỏ qua và khuyến nghị người dùng tự chạy `audit`; không bao giờ chặn đề xuất vì nó.

   Giới hạn ở 2-3 lựa chọn sắc bén với lệnh chính xác cần nhập. Menu vẫn là phương án dự phòng; khuyến nghị là phần dẫn dắt.
2. **Từ đầu tiên khớp với một lệnh** (bảng trên HOẶC `pin` / `unpin` / `hooks`): tải tệp tham chiếu của nó (trên các nền tảng gốc, biến thể gốc của bảng; quy tắc một tệp ở bước thiết lập 2) và làm theo hướng dẫn của nó. Mọi thứ sau tên lệnh là mục tiêu.
3. **Từ đầu tiên không khớp, nhưng ý định ánh xạ rõ ràng tới một lệnh** (ví dụ: "sửa khoảng cách" → `layout`, "viết lại thông báo lỗi này" → `clarify`, "màu sắc có vẻ phẳng" → `colorize`): tải tài liệu tham chiếu của lệnh đó (cùng quy tắc biến thể gốc) và tiến hành như thể nó được gọi. Nếu hai lệnh đều có thể phù hợp, hãy hỏi một lần để chọn.
4. **Không có lệnh nào khớp rõ ràng**: gọi thiết kế chung. Áp dụng các bước thiết lập, các Quy tắc chung và tài liệu tham chiếu đăng ký đã tải, sử dụng toàn bộ đối số làm bối cảnh.

Thiết lập (thu thập bối cảnh, thanh đăng ký) đã được tải vào lúc đó; các lệnh phụ không gọi lại `/impeccable`.

Nếu từ đầu tiên là `craft` hoặc `shape`, hoặc quy tắc định tuyến 3 ánh xạ rõ ràng ý định của người dùng tới một trong hai lệnh này, bước thiết lập vẫn chạy trước, nhưng tài liệu tham chiếu tương ứng ([reference/craft.md](reference/craft.md) hoặc [reference/shape.md](reference/shape.md)) sẽ sở hữu phần còn lại của quy trình. Cả hai đều là quy trình xây dựng từ đầu: nếu bước thiết lập gọi `init` như một yếu tố chặn, hãy hoàn thành init, làm mới bối cảnh, sau đó tiếp tục lệnh và mục tiêu ban đầu.

`teach` là một bí danh (alias) đã lỗi thời cho `init`: nếu người dùng nhập nó, hãy tải [reference/init.md](reference/init.md) và tiến hành như thể họ chạy `init`.

## Ghim / Hủy ghim (Pin / Unpin)

**Ghim (Pin)** tạo ra một phím tắt độc lập để `/<lệnh>` gọi `/impeccable <lệnh>` trực tiếp. **Hủy ghim (Unpin)** sẽ loại bỏ nó. Script sẽ ghi vào mọi thư mục cấu hình tác nhân hiện có trong dự án.

```bash
node .gemini/skills/impeccable/scripts/pin.mjs <pin|unpin> <lệnh>
```

`<lệnh>` hợp lệ là bất kỳ lệnh nào từ bảng ở trên. Báo cáo kết quả của script một cách ngắn gọn. Xác nhận phím tắt mới khi thành công, chuyển tiếp nguyên văn đầu ra lỗi (stderr) khi thất bại.

## Móc nối (Hooks)

Lệnh `/impeccable hooks <on|off|status|ignore-rule|ignore-file|ignore-value|reset>` quản lý móc nối bộ phát hiện thiết kế cho dự án này. Móc nối này sẽ tự động chạy bộ phát hiện sau khi chỉnh sửa trực tiếp các tệp UI và hiển thị các phát hiện dưới dạng lời nhắc hệ thống. Quy trình đầy đủ nằm trong [reference/hooks.md](reference/hooks.md); hãy tải nó khi người dùng gọi `/impeccable hooks` với bất kỳ đối số nào.