import { info } from '../../../travels'
import InfoLayout from '../../../components/InfoLayout/InfoLayout'

const InfoPage = () => {
	return (
		<div style={{ height: '100%' }}>
			<InfoLayout
				firstText={info[0].firstText}
				img={info[0].img}
				infoDescription={info[0].infoDescription}
				infoText={info[0].infoText}
				secondText={info[0].secondText}
				thirdText={info[0].thirdText}
			/>
		</div>
	)
}

export default InfoPage
